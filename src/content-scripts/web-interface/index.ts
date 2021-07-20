// Content script interfacing the website and the extension

import schemas, {
  commonRequestParams,
} from 'src/content-scripts/web-interface/input_validation';
import {
  cancelPreviousRequest,
  sendIncompleteDataResponse,
  sendRequestToBackground,
  sendResponse,
} from 'src/content-scripts/web-interface/response.logic';
import { KeychainRequest } from 'src/interfaces/keychain.interface';

let req: KeychainRequest | null = null;

// Injecting Keychain

const setupInjection = () => {
  try {
    var scriptTag = document.createElement('script');
    scriptTag.src = chrome.runtime.getURL('./hive_keychain.js');
    var container = document.head || document.documentElement;
    container.insertBefore(scriptTag, container.children[0]);
  } catch (e) {
    console.error('Hive Keychain injection failed.', e);
  }
};

setupInjection();

// Answering the handshakes
document.addEventListener('swHandshake_hive', () => {
  window.postMessage(
    {
      type: 'hive_keychain_handshake',
    },
    window.location.origin,
  );
});

// Answering the requests
type KeychainRequestWrapper = {
  detail: KeychainRequest;
};
document.addEventListener('swRequest_hive', (request: object) => {
  const prevReq = req;
  req = (request as KeychainRequestWrapper).detail;
  const validation = validateRequest(req);
  const { error, value } = validation;
  if (!error) {
    console.log('valid', value);
    sendRequestToBackground(value);
    if (prevReq) {
      cancelPreviousRequest(prevReq);
    }
  } else {
    sendIncompleteDataResponse(value, error);
    req = prevReq;
  }
});

// Get notification from the background upon request completion and pass it back to the dApp.
chrome.runtime.onMessage.addListener(function (obj, sender, sendResp) {
  if (obj.command === 'answerRequest') {
    sendResponse(obj.msg);
    req = null;
  }
});

// Request validation
const validateRequest = (req: KeychainRequest) => {
  if (!req) return { value: req, error: 'Missing request.' };
  if (!req.type) return { value: req, error: 'Missing request type.' };
  return schemas[req.type].append(commonRequestParams).validate(req);
};
