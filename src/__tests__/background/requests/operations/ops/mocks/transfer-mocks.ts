import LedgerModule from '@background/ledger.module';
import { RequestsHandler } from '@background/requests/request-handler';
import { ExtendedAccount, TransactionConfirmation } from '@hiveio/dhive';
import {
  KeychainKeyTypesLC,
  KeychainRequestData,
  KeychainRequestTypes,
  RequestId,
  RequestTransfer,
} from '@interfaces/keychain.interface';
import messages from 'src/__tests__/background/requests/operations/ops/mocks/messages';
import { hiveTxConfirmation } from 'src/__tests__/utils-for-testing/data/confirmations';
import mk from 'src/__tests__/utils-for-testing/data/mk';
import mocksImplementation from 'src/__tests__/utils-for-testing/implementations/implementations';
import AccountUtils from 'src/utils/account.utils';

const requestHandler = new RequestsHandler();

const data = {
  domain: 'domain',
  type: KeychainRequestTypes.transfer,
  username: mk.user.one,
  to: 'theghost1980',
  amount: '100000.000',
  memo: '',
  enforce: false,
  currency: 'HIVE',
  request_id: 1,
} as RequestTransfer & RequestId;

const confirmed = {
  id: '1',
  trx_num: 112234,
  block_num: 1223,
  expired: false,
} as TransactionConfirmation;

const params = {
  getUserKey: [
    [data.username!, KeychainKeyTypesLC.memo],
    [data.username!, KeychainKeyTypesLC.active],
  ],
};

const mocks = {
  getUILanguage: () =>
    (chrome.i18n.getUILanguage = jest.fn().mockReturnValue('en-US')),
  i18n: () =>
    (chrome.i18n.getMessage = jest
      .fn()
      .mockImplementation(mocksImplementation.i18nGetMessageCustom)),
  getExtendedAccount: (account: ExtendedAccount | undefined) =>
    (AccountUtils.getExtendedAccount = jest.fn().mockResolvedValue(account)),
  // broadcastAndConfirmTransactionWithSignature: (
  //   result: HiveTxConfirmationResult,
  // ) =>
  //   jest
  //     .spyOn(HiveTxUtils, 'broadcastAndConfirmTransactionWithSignature')
  //     .mockResolvedValue(result),
  LedgerModule: {
    getSignatureFromLedger: (signature: string) =>
      jest
        .spyOn(LedgerModule, 'getSignatureFromLedger')
        .mockResolvedValue(signature),
  },
  // HiveTxUtils: {
  //   sendOperation: (result: HiveTxConfirmationResult) =>
  //     jest.spyOn(HiveTxUtils, 'sendOperation').mockResolvedValue(result),
  // },
};

const spies = {
  getUserKey: jest.spyOn(requestHandler, 'getUserKeyPair'),
};

const methods = {
  afterEach: afterEach(() => {
    jest.clearAllMocks();
  }),
  beforeEach: beforeEach(() => {
    mocks.getUILanguage();
    mocks.i18n();
  }),
  assert: {
    error: (
      result: any,
      error: TypeError | SyntaxError,
      data: KeychainRequestData & RequestId,
      message: string,
    ) => {
      const { request_id, ...datas } = data;
      expect(result).toEqual(
        messages.error.answerError(
          error,
          datas,
          request_id,
          message,
          undefined,
        ),
      );
    },
    success: (result: any, message: string) => {
      const { request_id, ...datas } = data;
      expect(result).toEqual(
        messages.success.answerSucess(
          //TODO check bellow & fix!
          hiveTxConfirmation('tx_id', 'id', true),
          datas,
          request_id,
          message,
          undefined,
        ),
      );
    },
  },
};

const constants = {
  data,
  requestHandler,
  confirmed,
  params,
};

export default {
  methods,
  constants,
  mocks,
  spies,
};
