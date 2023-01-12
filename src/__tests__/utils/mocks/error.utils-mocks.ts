import { KeychainError } from 'src/keychain-error';
import mk from 'src/__tests__/utils-for-testing/data/mk';

//data
enum BlockchainErrorType {
  ADJUST_BLANCE = 'adjust_balance',
  GET_ACCOUNT = 'get_account',
  DO_APPLY = 'do_apply',
  WITNESS_NOT_FOUND = 'get_witness',
  VALIDATION = 'validate',
}

enum HiveEngineErrorType {
  OVERDRAW_BALANCE = 'overdrawn balance',
  TOKEN_NOT_EXISTING = 'symbol does not exist',
  USER_NOT_EXISTING = 'invalid to',
}

enum LedgerErrorType {
  DENIED_BY_USER = 'CONDITIONS_OF_USE_NOT_SATISFIED',
}
//end data
const blockchainErrorData = [
  {
    error: {
      data: {
        stack: [
          {
            context: { method: BlockchainErrorType.ADJUST_BLANCE },
            data: { a: { nai: '@@000000013' }, acc: mk.user.one },
          },
        ],
      },
    },
    expectError: new KeychainError('bgd_ops_transfer_adjust_balance'),
  },
  {
    error: {
      data: {
        stack: [
          {
            context: { method: BlockchainErrorType.GET_ACCOUNT },
            data: { name: mk.user.one },
          },
        ],
      },
    },
    expectError: new KeychainError('bgd_ops_transfer_get_account'),
  },
  {
    error: {
      data: {
        stack: [
          {
            context: { method: BlockchainErrorType.DO_APPLY },
            format: 'It has_proxy somewhere',
          },
        ],
      },
    },
    expectError: new KeychainError('html_popup_witness_vote_error_proxy'),
  },
  {
    error: {
      data: {
        stack: [
          {
            context: { method: BlockchainErrorType.WITNESS_NOT_FOUND },
          },
        ],
      },
    },
    expectError: new KeychainError('html_popup_witness_not_existing'),
  },
  {
    error: {
      data: {
        stack: [
          {
            context: { method: BlockchainErrorType.VALIDATION },
            format: 'Will pass 10 ${days}',
            data: { days: 10 },
          },
        ],
      },
    },
    expectError: new KeychainError(
      'recurrent_transfer_recurrence_max_duration_error',
    ),
  },
  {
    error: {
      data: {
        stack: [
          {
            context: { method: BlockchainErrorType.VALIDATION },
            format: 'Will pass ${recurrence}',
            data: { recurrence: 10 },
          },
        ],
      },
    },
    expectError: new KeychainError('recurrent_transfer_recurrence_error'),
  },
  {
    error: {
      data: {
        stack: [
          {
            context: { method: BlockchainErrorType.VALIDATION },
            format: 'Failed execution',
          },
        ],
      },
    },
    expectError: new KeychainError('recurrent_transfer_iterations_error'),
  },
];

const hiveEngineErrorData = [
  {
    error: HiveEngineErrorType.OVERDRAW_BALANCE,
    payload: {
      symbol: 'LEO',
    },
    expectError: new KeychainError('hive_engine_overdraw_balance_error'),
  },
  {
    error: HiveEngineErrorType.TOKEN_NOT_EXISTING,
    payload: {
      symbol: 'LEO',
    },
    expectError: new KeychainError('hive_engine_not_existing_token_error'),
  },
  {
    error: HiveEngineErrorType.USER_NOT_EXISTING,
    payload: {
      to: mk.user.one,
    },
    expectError: new KeychainError('hive_engine_not_existing_user_error'),
  },
  {
    error: 'Default_case',
    payload: {},
    expectError: new KeychainError('bgd_ops_hive_engine_confirmation_error'),
  },
];

export default { blockchainErrorData, hiveEngineErrorData };
