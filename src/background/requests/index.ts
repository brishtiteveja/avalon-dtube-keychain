import init from '@background/requests/init';
import { LocalAccount } from '@interfaces/local-account.interface';
import { UserPreference } from '@interfaces/preferences.interface';
import { Rpc } from '@interfaces/rpc.interface';
import {
  KeychainRequest,
  KeychainRequestWrapper,
} from 'src/interfaces/keychain.interface';

type RequestModule = {
  tab?: number;
  request?: KeychainRequest;
  request_id?: number;
  confirmed: boolean;
  accounts: LocalAccount[];
  rpc: Rpc | null;
  preferences?: UserPreference[];
  key?: string;
  publicKey?: string;
  windowId?: number;
  setWindowId: (windowId?: number) => void;
  setConfirmed: (confirmed: boolean) => void;
  sendRequest: (
    sender: chrome.runtime.MessageSender,
    msg: KeychainRequestWrapper,
  ) => void;
  initializeParams: (
    accounts: LocalAccount[],
    rpc: Rpc,
    preferences: UserPreference[],
  ) => void;
  setKeys: (key: string, publicKey: string) => void;
  reset: () => void;
};

const RequestsModule: RequestModule = {
  tab: undefined,
  request: undefined,
  request_id: undefined,
  confirmed: false,
  accounts: [],
  rpc: null,
  preferences: undefined,
  key: undefined,
  publicKey: undefined,
  reset: function () {
    this.key = undefined;
    this.publicKey = undefined;
    this.accounts = [];
    this.request = undefined;
    this.request_id = undefined;
    this.tab = undefined;
  },
  initializeParams: function (
    accounts: LocalAccount[],
    rpc: Rpc,
    preferences: UserPreference[],
  ) {
    console.log(this);
    this.accounts = accounts;
    this.rpc = rpc;
    this.preferences = preferences;
    console.log(this);
  },
  setConfirmed: function (confirmed: boolean) {
    this.confirmed = confirmed;
  },
  setWindowId: function (windowId?: number) {
    this.windowId = windowId;
  },
  setKeys: function (key: string, publicKey: string) {
    this.key = key;
    this.publicKey = this.publicKey;
  },
  sendRequest: function (
    sender: chrome.runtime.MessageSender,
    msg: KeychainRequestWrapper,
  ) {
    this.tab = sender.tab!.id;
    console.log(msg);
    this.request = msg.request;
    this.request_id = msg.request_id;
    init(msg.request, this.tab, msg.domain);
  },
};

export const getRequestModule = () => RequestsModule;
export default RequestsModule;
