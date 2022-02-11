import { TokenBalance, TokenTransaction } from '@interfaces/tokens.interface';
import { setTitleContainerProperties } from '@popup/actions/title-container.actions';
import { loadTokenHistory } from '@popup/actions/token.actions';
import { TokenHistoryItemComponent } from '@popup/pages/app-container/home/tokens/tokens-history/token-history-item/token-history-item.component';
import { RootState } from '@popup/store';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { InputType } from 'src/common-ui/input/input-type.enum';
import InputComponent from 'src/common-ui/input/input.component';
import './tokens-history.component.scss';

const TokensHistory = ({
  activeAccountName,
  currentToken,
  tokenHistory,
  loadTokenHistory,
  setTitleContainerProperties,
}: PropsFromRedux) => {
  const [displayedTransactions, setDisplayedTransactions] = useState<
    TokenTransaction[]
  >([]);

  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    loadTokenHistory(activeAccountName!, currentToken.symbol);
    setTitleContainerProperties({
      title: 'popup_html_tokens_history',
      titleParams: [currentToken.symbol],
      isBackButtonEnabled: true,
    });
  }, []);

  useEffect(() => {
    setDisplayedTransactions(
      tokenHistory.filter((item) => {
        return (
          item.memo?.toLowerCase().includes(filterValue.toLowerCase()) ||
          item.amount?.toLowerCase().includes(filterValue.toLowerCase()) ||
          (item.to !== activeAccountName &&
            item.to?.toLowerCase().includes(filterValue.toLowerCase())) ||
          (item.from !== activeAccountName &&
            item.from?.toLowerCase().includes(filterValue.toLowerCase())) ||
          (item.timestamp &&
            moment(item.timestamp)
              .format('L')
              .includes(filterValue.toLowerCase()))
        );
      }),
    );
  }, [tokenHistory, filterValue]);

  return (
    <div className="tokens-history">
      <InputComponent
        type={InputType.TEXT}
        placeholder="popup_html_search"
        value={filterValue}
        onChange={setFilterValue}
      />
      <div className="item-list">
        {displayedTransactions.map((transaction: TokenTransaction) => (
          <TokenHistoryItemComponent
            key={transaction.transactionId}
            transaction={transaction}></TokenHistoryItemComponent>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    activeAccountName: state.activeAccount?.name,
    userTokens: state.userTokens,
    currentToken: state.navigation.params?.token as TokenBalance,
    tokenHistory: state.tokenHistory as TokenTransaction[],
  };
};

const connector = connect(mapStateToProps, {
  loadTokenHistory,
  setTitleContainerProperties,
});
type PropsFromRedux = ConnectedProps<typeof connector>;

export const TokensHistoryComponent = connector(TokensHistory);
