import LedgerModule from '@background/ledger.module';
import { createMessage } from '@background/requests/operations/operations.utils';
import { RequestsHandler } from '@background/requests/request-handler';
import { RequestId, RequestSendToken } from '@interfaces/keychain.interface';
import { PrivateKeyType } from '@interfaces/keys.interface';
import { KeychainError } from 'src/keychain-error';
import { HiveTxUtils } from 'src/utils/hive-tx.utils';
import { KeysUtils } from 'src/utils/keys.utils';
import TokensUtils from 'src/utils/tokens.utils';

export const broadcastSendToken = async (
  requestHandler: RequestsHandler,
  data: RequestSendToken & RequestId,
) => {
  let err, err_message, result;
  let key = requestHandler.data.key;
  try {
    switch (KeysUtils.getKeyType(key!)) {
      case PrivateKeyType.LEDGER: {
        const tx = await TokensUtils.getSendTokenTransaction(
          data.currency,
          data.to,
          data.amount,
          data.memo,
          data.username,
        );
        LedgerModule.signTransactionFromLedger({
          transaction: tx,
          key: key!,
          signHash: true,
        });
        const signature = await LedgerModule.getSignatureFromLedger();
        result = await HiveTxUtils.broadcastAndConfirmTransactionWithSignature(
          tx,
          signature,
        );
        break;
      }
      default: {
        result = await TokensUtils.sendToken(
          data.currency,
          data.to,
          data.amount,
          data.memo,
          key!,
          data.username,
        );
        break;
      }
    }
  } catch (e: any) {
    err = (e as KeychainError).trace || e;
    err_message = await chrome.i18n.getMessage(
      (e as KeychainError).message,
      (e as KeychainError).messageParams,
    );
  } finally {
    const message = createMessage(
      err,
      result,
      data,
      await chrome.i18n.getMessage('bgd_ops_tokens'),
      err_message,
    );
    return message;
  }
};
