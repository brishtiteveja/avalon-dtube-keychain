import { RequestsHandler } from '@background/requests';
import { TransactionConfirmation } from '@hiveio/dhive';
import { RequestDecode, RequestId } from '@interfaces/keychain.interface';
import keychainRequest from 'src/__tests__/utils-for-testing/data/keychain-request';
import mocksImplementation from 'src/__tests__/utils-for-testing/implementations/implementations';

const requestHandler = new RequestsHandler();
const data = {
  ...keychainRequest.wValues.decode,
  request_id: 1,
} as RequestDecode & RequestId;
const confirmed = {
  id: '1',
  trx_num: 112234,
  block_num: 1223,
  expired: false,
} as TransactionConfirmation;

const mocks = {
  getUILanguage: () =>
    (chrome.i18n.getUILanguage = jest.fn().mockReturnValue('en-US')),
  i18n: () =>
    (chrome.i18n.getMessage = jest
      .fn()
      .mockImplementation(mocksImplementation.i18nGetMessageCustom)),
};

const methods = {
  afterEach: afterEach(() => {
    jest.clearAllMocks();
  }),
  beforeEach: beforeEach(() => {
    mocks.getUILanguage();
    mocks.i18n();
  }),
};

const constants = {
  data,
  requestHandler,
  confirmed,
};

export default {
  methods,
  constants,
};
