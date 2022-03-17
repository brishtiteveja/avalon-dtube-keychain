import { KeychainKeyTypesLC } from '@interfaces/keychain.interface';
import { TokenBalance } from '@interfaces/tokens.interface';
import { TransferToItems } from '@interfaces/transfer-to-username.interface';
import {
  addToLoadingList,
  removeFromLoadingList,
} from '@popup/actions/loading.actions';
import {
  setErrorMessage,
  setSuccessMessage,
} from '@popup/actions/message.actions';
import {
  navigateTo,
  navigateToWithParams,
} from '@popup/actions/navigation.actions';
import { fetchPhishingAccounts } from '@popup/actions/phishing.actions';
import { setTitleContainerProperties } from '@popup/actions/title-container.actions';
import { Icons } from '@popup/icons.enum';
import { AvailableCurrentPanelComponent } from '@popup/pages/app-container/home/power-up-down/available-current-panel/available-current-panel.component';
import { RootState } from '@popup/store';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { OperationButtonComponent } from 'src/common-ui/button/operation-button.component';
import { InputType } from 'src/common-ui/input/input-type.enum';
import InputComponent from 'src/common-ui/input/input.component';
import { LocalStorageKeyEnum } from 'src/reference-data/local-storage-key.enum';
import { Screen } from 'src/reference-data/screen.enum';
import AccountUtils from 'src/utils/account.utils';
import CurrencyUtils from 'src/utils/currency.utils';
import HiveEngineUtils from 'src/utils/hive-engine.utils';
import LocalStorageUtils from 'src/utils/localStorage.utils';
import BlockchainTransactionUtils from 'src/utils/tokens.utils';
import TransferUtils from 'src/utils/transfer.utils';
import './token-operation.component.scss';

export enum TokenOperationType {
  STAKE = 'stake',
  UNSTAKE = 'unstake',
  DELEGATE = 'delegate',
}

const TokensOperation = ({
  operationType,
  activeAccount,
  tokenBalance,
  phishing,
  formParams,
  setErrorMessage,
  setSuccessMessage,
  navigateToWithParams,
  navigateTo,
  fetchPhishingAccounts,
  addToLoadingList,
  removeFromLoadingList,
  setTitleContainerProperties,
}: PropsFromRedux) => {
  const [receiverUsername, setReceiverUsername] = useState(
    formParams.receiverUsername
      ? formParams.receiverUsername
      : operationType === TokenOperationType.DELEGATE
      ? ''
      : activeAccount.name,
  );
  const [amount, setAmount] = useState(
    formParams.amount ? formParams.amount : '',
  );

  const balance = formParams.balance
    ? formParams.balance
    : operationType === TokenOperationType.UNSTAKE
    ? tokenBalance.stake
    : tokenBalance.balance;
  const symbol = formParams.symbol ? formParams.symbol : tokenBalance.symbol;

  const [autocompleteTransferUsernames, setAutocompleteTransferUsernames] =
    useState<string[]>([]);

  useEffect(() => {
    setTitleContainerProperties({
      title: `popup_html_${operationType}_tokens`,
      isBackButtonEnabled: true,
    });
    fetchPhishingAccounts();
    loadAutocompleteTransferUsernames();
  }, []);

  const loadAutocompleteTransferUsernames = async () => {
    const transferTo: TransferToItems =
      await LocalStorageUtils.getValueFromLocalStorage(
        LocalStorageKeyEnum.TRANSFER_TO_USERNAMES,
      );
    setAutocompleteTransferUsernames(
      transferTo ? transferTo[activeAccount.name!] : [],
    );
  };

  const setAmountToMaxValue = () => {
    setAmount(parseFloat(balance.toString()));
  };

  const getFormParams = () => {
    return {
      receiverUsername: receiverUsername,
      amount: amount,
      symbol: symbol,
      balance: balance,
    };
  };

  const handleClickOnSend = async () => {
    if (!(await AccountUtils.doesAccountExist(receiverUsername))) {
      setErrorMessage('popup_no_such_account');
      return;
    }

    if (parseFloat(amount.toString()) > parseFloat(balance.toString())) {
      setErrorMessage('popup_html_power_up_down_error');
      return;
    }
    const formattedAmount = `${parseFloat(amount.toString()).toFixed(
      8,
    )} ${symbol}`;

    const fields = [
      { label: 'popup_html_transfer_amount', value: formattedAmount },
    ];

    if (operationType === TokenOperationType.DELEGATE) {
      fields.unshift({
        label: 'popup_html_transfer_to',
        value: `@${receiverUsername}`,
      });
    }

    navigateToWithParams(Screen.CONFIRMATION_PAGE, {
      message: chrome.i18n.getMessage(
        `popup_html_${operationType}_tokens_confirm_text`,
      ),
      fields: fields,
      title: `popup_html_${operationType}_tokens`,
      formParams: getFormParams(),
      afterConfirmAction: async () => {
        addToLoadingList(`popup_html_${operationType}_tokens`);
        let tokenOperationResult = null;

        switch (operationType) {
          case TokenOperationType.DELEGATE:
            tokenOperationResult = await HiveEngineUtils.delegateToken(
              activeAccount.keys.active as string,
              receiverUsername,
              symbol,
              amount,
              activeAccount.name!,
            );
            break;
          case TokenOperationType.STAKE:
            tokenOperationResult = await HiveEngineUtils.stakeToken(
              activeAccount.keys.active as string,
              receiverUsername,
              symbol,
              amount,
              activeAccount.name!,
            );
            break;
          case TokenOperationType.UNSTAKE:
            tokenOperationResult = await HiveEngineUtils.unstakeToken(
              activeAccount.keys.active as string,
              symbol,
              amount,
              activeAccount.name!,
            );
            break;
        }

        if (tokenOperationResult.id) {
          addToLoadingList('html_popup_confirm_transaction_operation');
          removeFromLoadingList(`popup_html_${operationType}_tokens`);
          let confirmationResult: any =
            await BlockchainTransactionUtils.tryConfirmTransaction(
              tokenOperationResult.id,
            );
          removeFromLoadingList('html_popup_confirm_transaction_operation');
          if (confirmationResult.confirmed) {
            navigateTo(Screen.HOME_PAGE, true);
            await TransferUtils.saveTransferRecipient(
              receiverUsername,
              activeAccount,
            );

            setSuccessMessage(`popup_html_${operationType}_tokens_success`);
          } else {
            setErrorMessage('popup_token_timeout');
          }
        } else {
          removeFromLoadingList('html_popup_transfer_token_operation');
          setErrorMessage(`popup_html_${operationType}_tokens_failed`);
        }
      },
    });
  };

  return (
    <div className="transfer-tokens-page">
      <AvailableCurrentPanelComponent
        available={balance}
        availableCurrency={symbol}
        availableLabel={'popup_html_balance'}></AvailableCurrentPanelComponent>

      <div className="disclaimer">
        {chrome.i18n.getMessage('popup_html_tokens_operation_text')}
      </div>
      {operationType === TokenOperationType.DELEGATE && (
        <InputComponent
          type={InputType.TEXT}
          logo={Icons.AT}
          placeholder="popup_html_username"
          value={receiverUsername}
          onChange={setReceiverUsername}
          autocompleteValues={autocompleteTransferUsernames}
        />
      )}
      <div className="value-panel">
        <div className="value-input-panel">
          <InputComponent
            type={InputType.NUMBER}
            placeholder="0.000"
            skipTranslation={true}
            value={amount}
            onChange={setAmount}
            onSetToMaxClicked={setAmountToMaxValue}
          />
        </div>
        <div className="symbol">{symbol}</div>
      </div>

      <OperationButtonComponent
        requiredKey={KeychainKeyTypesLC.active}
        label={'popup_html_send_transfer'}
        onClick={handleClickOnSend}
        fixToBottom
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    activeAccount: state.activeAccount,
    currencyLabels: CurrencyUtils.getCurrencyLabels(state.activeRpc?.testnet!),
    tokenBalance: state.navigation.stack[0].params
      ?.tokenBalance as TokenBalance,
    operationType: state.navigation.stack[0].params
      ?.operationType as TokenOperationType,
    formParams: state.navigation.stack[0].previousParams?.formParams
      ? state.navigation.stack[0].previousParams?.formParams
      : {},
    phishing: state.phishing,
  };
};

const connector = connect(mapStateToProps, {
  setErrorMessage,
  setSuccessMessage,
  navigateToWithParams,
  navigateTo,
  fetchPhishingAccounts,
  addToLoadingList,
  removeFromLoadingList,
  setTitleContainerProperties,
});
type PropsFromRedux = ConnectedProps<typeof connector>;

export const TokensOperationComponent = connector(TokensOperation);
