/* istanbul ignore file */
//data needed to be used on some tests.
import { DynamicGlobalProperties } from '@hiveio/dhive';
import moment from 'moment';
require('dotenv').config();

const userData = {
  username: process.env._TEST_USERNAME || 'error, please check',
  encryptKeys: {
    owner: process.env._TEST_OWNER_PUB || 'error, please check',
    active: process.env._TEST_ACTIVE_PUB || 'error, please check',
    posting: process.env._TEST_POSTING_PUB || 'error, please check',
    memo: process.env._TEST_MEMO_PUB || 'error, please check',
    randomString53: 'Kzi5gocL1KZlnsryMRIbfdmXgz2lLmiaosQDELp3GM2jU9sFYguxv',
  },
  nonEncryptKeys: {
    master: process.env._TEST_MASTER || 'error, please check',
    owner: process.env._TEST_OWNER || 'error, please check',
    active: process.env._TEST_ACTIVE || 'error, please check',
    posting: process.env._TEST_POSTING || 'error, please check',
    memo: process.env._TEST_MEMO || 'error, please check',
    fakeKey: '5Jq1oDi61PWMq7DNeJWQUVZV3v85QVFMN9ro3Dnmi1DySjgU1v9',
    randomStringKey51: 'MknOPyeXr5CGsCgvDewdny55MREtDpAjhkT9OsPPLCujYD82Urk',
  },
};

const userData2 = {
  username: 'workerjab2',
};
//data extended account
const dataUserExtended = {
  id: 1439151,
  name: 'workerjab1',
  owner: {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [], //['STM8X56V5jtFwmchDiDfyb4YgMfjfCVrUnPVZYkuqKuWw1ZAm3jV8', 1]
  },
  active: {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [], //['STM85Hcqk92kE1AtueigBAtHD2kZRcqji9Gi38ZaiW8xcWcQJLof6', 1]
  },
  posting: {
    weight_threshold: 1,
    account_auths: [], //['jobaboard', 1],['leofinance', 1],
    key_auths: [], //['STM7cfYmyCU6J45NjBSBUwZAV6c2ttZoNjTeaxkWSYq5HDZDWtzC3', 1]
  },
  memo_key: 'STM6mbGVeyUkC1DZUBW5wx6okDskTqGLm1VgbPCRCGyw6CPSn1VNY',
  json_metadata:
    '{"beneficiaries":[{"name":"tipu","weight":100,"label":"creator"},{"name":"hiveonboard","weight":100,"label":"provider"}]}',
  proxy: '',
  last_owner_update: '1970-01-01T00:00:00',
  last_account_update: '2021-03-06T17:18:51',
  created: '2021-02-27T12:44:12',
  mined: false,
  recovery_account: 'tipu',
  last_account_recovery: '1970-01-01T00:00:00',
  reset_account: 'null',
  comment_count: 0,
  lifetime_vote_count: 0,
  post_count: 1,
  can_vote: true,
  voting_manabar: {
    current_mana: 0,
    last_update_time: 1615046820,
  },
  voting_power: 0,
  balance: '0.000 HIVE',
  savings_balance: '0.000 HIVE',
  hbd_balance: '0.001 HBD',
  hbd_seconds: '0',
  hbd_seconds_last_update: '2021-03-06T17:26:03',
  hbd_last_interest_payment: '1970-01-01T00:00:00',
  savings_hbd_balance: '0.000 HBD',
  savings_hbd_seconds: '0',
  savings_hbd_seconds_last_update: '1970-01-01T00:00:00',
  savings_hbd_last_interest_payment: '1970-01-01T00:00:00',
  savings_withdraw_requests: 0,
  reward_hbd_balance: '0.000 HBD',
  reward_hive_balance: '0.000 HIVE',
  reward_vesting_balance: '0.000000 VESTS',
  reward_vesting_hive: '0.000 HIVE',
  vesting_shares: '0.000000 VESTS',
  delegated_vesting_shares: '0.000000 VESTS',
  received_vesting_shares: '0.000000 VESTS',
  vesting_withdraw_rate: '0.000000 VESTS',
  //post_voting_power: '0.000000 VESTS',
  next_vesting_withdrawal: '1969-12-31T23:59:59',
  withdrawn: 0,
  to_withdraw: 0,
  withdraw_routes: 0,
  //pending_transfers: 0,
  curation_rewards: 0,
  posting_rewards: 0,
  proxied_vsf_votes: [0, 0, 0, 0],
  witnesses_voted_for: 5,
  last_post: '2021-03-06T16:06:03',
  last_root_post: '1970-01-01T00:00:00',
  last_vote_time: '2021-03-06T16:07:00',
  //post_bandwidth: 0,
  //pending_claimed_accounts: 0,
  //governance_vote_expiration_ts: '2022-07-12T12:38:15',
  //delayed_votes: [],
  //open_recurrent_transfers: 0,
  vesting_balance: '0.000 HIVE',
  reputation: 0,
  transfer_history: [],
  market_history: [],
  post_history: [],
  vote_history: [],
  other_history: [],
  witness_votes: [
    'aggroed',
    'blocktrades',
    'drakos',
    'someguy123',
    'therealwolf',
  ],
  tags_usage: [],
  guest_bloggers: [],
};

const cedricDataSample = {
  id: 734613,
  name: 'cedricguillas',
  owner: {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [['STM57cDQzB1MRBycNuQ3MUkcqzcAiAime5pMaG738gatvX88GFxCx', 1]],
  },
  active: {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [['STM5crHtgnoweFs3kM74nuK5VtZU9Js6EmSCUu27bDK4R3bspehVS', 1]],
  },
  posting: {
    weight_threshold: 1,
    account_auths: [
      ['peakd.app', 1],
      ['stoodkev', 1],
    ],
    key_auths: [['STM57E66rEk5QuyqSm2XbbzMFu3ToFfqPRoiBoJm7KrYqiT5nfMpy', 1]],
  },
  memo_key: 'STM6WmdTCwKw6gtpKkyRo2ewb2Jf6NgGwYS8XFFVkt8hvMm1uXtKQ',
  json_metadata:
    '{"profile":{"profile_image":"https://s13.postimg.org/fwv897ow7/image.jpg","about":"Software, Android and Web Developer","location":"Taiwan","name":"cedricguillas"}}',
  posting_json_metadata:
    '{"profile":{"profile_image":"https://files.peakd.com/file/peakd-hive/cedricguillas/CV.jpg","about":"Software, Android and Web Developer","location":"Taiwan","name":"cedricguillas","version":2}}',
  proxy: '',
  last_owner_update: '1970-01-01T00:00:00',
  last_account_update: '2022-01-25T00:19:36',
  created: '2018-02-08T03:49:12',
  mined: false,
  recovery_account: 'stoodkev',
  last_account_recovery: '1970-01-01T00:00:00',
  reset_account: 'null',
  comment_count: 0,
  lifetime_vote_count: 0,
  post_count: 52,
  can_vote: true,
  voting_manabar: {
    current_mana: '9524001134618',
    last_update_time: 1651626498,
  },
  downvote_manabar: {
    current_mana: '2460669979053',
    last_update_time: 1651626498,
  },
  voting_power: 9608,
  balance: '2.300 HIVE',
  savings_balance: '0.001 HIVE',
  hbd_balance: '1.000 HBD',
  hbd_seconds: '866217363',
  hbd_seconds_last_update: '2021-06-02T18:39:54',
  hbd_last_interest_payment: '2021-05-31T15:59:54',
  savings_hbd_balance: '351.049 HBD',
  savings_hbd_seconds: '0',
  savings_hbd_seconds_last_update: '2022-04-08T05:19:06',
  savings_hbd_last_interest_payment: '2022-04-08T05:19:06',
  savings_withdraw_requests: 0,
  reward_hbd_balance: '0.000 HBD',
  reward_hive_balance: '0.000 HIVE',
  reward_vesting_balance: '0.000000 VESTS',
  reward_vesting_hive: '0.000 HIVE',
  vesting_shares: '1075684.255573 VESTS',
  delegated_vesting_shares: '552099.244487 VESTS',
  received_vesting_shares: '9319236.045047 VESTS',
  vesting_withdraw_rate: '141.139919 VESTS',
  post_voting_power: '9842821.056133 VESTS',
  next_vesting_withdrawal: '2022-05-05T01:03:51',
  withdrawn: 282279838,
  to_withdraw: 1834818939,
  withdraw_routes: 0,
  pending_transfers: 0,
  curation_rewards: 249768,
  posting_rewards: 16790,
  proxied_vsf_votes: [0, 0, 0, 0],
  witnesses_voted_for: 0,
  last_post: '2021-04-28T05:47:30',
  last_root_post: '2021-04-28T05:47:30',
  last_vote_time: '2022-05-04T00:19:06',
  post_bandwidth: 0,
  pending_claimed_accounts: 4,
  governance_vote_expiration_ts: '2023-04-22T07:33:36',
  delayed_votes: [],
  open_recurrent_transfers: 0,
  vesting_balance: '0.000 HIVE',
  reputation: '315169300383',
  transfer_history: [],
  market_history: [],
  post_history: [],
  vote_history: [],
  other_history: [],
  witness_votes: [],
  tags_usage: [],
  guest_bloggers: [],
};

const dynamicPropertiesObj = {
  id: 1200,
  confidential_supply: '1.00',
  confidential_hbd_supply: '1.00',
  average_block_size: 1,
  max_virtual_bandwidth: '1',
  current_reserve_ratio: 1,
  head_block_number: 64067452,
  head_block_id: '03d1977cbc6ba55ad67452936e3498d1aa2f8b7f',
  time: '2022-05-04T02:19:06',
  current_witness: 'ocd-witness',
  total_pow: 514415,
  num_pow_witnesses: 172,
  virtual_supply: '410954159.915 HIVE',
  current_supply: '379292312.644 HIVE',
  init_hbd_supply: '0.000 HBD',
  current_hbd_supply: '25044521.192 HBD',
  total_vesting_fund_hive: '154736550.692 HIVE',
  total_vesting_shares: '283471198739.626565 VESTS',
  total_reward_fund_hive: '0.000 HIVE',
  total_reward_shares2: '0',
  pending_rewarded_vesting_shares: '755676344.919476 VESTS',
  pending_rewarded_vesting_hive: '389377.969 HIVE',
  hbd_interest_rate: 2000,
  hbd_print_rate: 10000,
  maximum_block_size: 65536,
  required_actions_partition_percent: 0,
  current_aslot: 64265182,
  recent_slots_filled: '340282366920938463463374607431768211455',
  participation_count: 128,
  last_irreversible_block_num: 64067436,
  vote_power_reserve_rate: 10,
  delegation_return_period: 432000,
  reverse_auction_seconds: 0,
  available_account_subsidies: 14129994,
  hbd_stop_percent: 1000,
  hbd_start_percent: 900,
  next_maintenance_time: '2022-05-04T02:34:06',
  last_budget_time: '2022-05-04T01:34:06',
  next_daily_maintenance_time: '2022-05-04T19:31:30',
  content_reward_percent: 6500,
  vesting_reward_percent: 1500,
  sps_fund_percent: 1000,
  sps_interval_ledger: '200.031 HBD',
  downvote_pool_percent: 2500,
  current_remove_threshold: 200,
  early_voting_seconds: 86400,
  mid_voting_seconds: 172800,
  max_consecutive_recurrent_transfer_failures: 10,
  max_recurrent_transfer_end_date: 730,
  min_recurrent_transfers_recurrence: 24,
  max_open_recurrent_transfers: 255,
} as DynamicGlobalProperties;

const fakeQuentinAccResponseWithAuth = {
  id: 9455,
  name: 'quentin',
  owner: { weight_threshold: 1, account_auths: [], key_auths: [] },
  active: {
    weight_threshold: 1,
    account_auths: [[process.env._TEST_USERNAME, 1]],
    key_auths: [['STM85Hcqk92kE1AtueigBAtHD2kZRcqji9Gi38ZaiW8xcWcQJLof6', 1]],
  },
  posting: {
    weight_threshold: 1,
    account_auths: [[process.env._TEST_USERNAME, 1]],
    key_auths: [['STM7cfYmyCU6J45NjBSBUwZAV6c2ttZoNjTeaxkWSYq5HDZDWtzC3', 1]],
  },
  memo_key: 'STM5NT27Z4XVgtpxTf6i5uB9pYmXC6syiHUSqzVZvQ1iN8BgJsLC2',
  json_metadata: '',
  posting_json_metadata: '',
  proxy: '',
  previous_owner_update: '1970-01-01T00:00:00',
  last_owner_update: '1970-01-01T00:00:00',
  last_account_update: '1970-01-01T00:00:00',
  created: '2016-05-23T03:24:00',
  mined: true,
  recovery_account: 'steem',
  last_account_recovery: '1970-01-01T00:00:00',
  reset_account: 'null',
  comment_count: 0,
  lifetime_vote_count: 0,
  post_count: 0,
  can_vote: true,
  voting_manabar: { current_mana: 10000, last_update_time: 1463973840 },
  downvote_manabar: { current_mana: 0, last_update_time: 1463973840 },
  voting_power: 10000,
  balance: '1.000 HIVE',
  savings_balance: '1.000 HIVE',
  hbd_balance: '1.000 HBD',
  hbd_seconds: '0',
  hbd_seconds_last_update: '1970-01-01T00:00:00',
  hbd_last_interest_payment: '1970-01-01T00:00:00',
  savings_hbd_balance: '1.000 HBD',
  savings_hbd_seconds: '0',
  savings_hbd_seconds_last_update: '1970-01-01T00:00:00',
  savings_hbd_last_interest_payment: '1970-01-01T00:00:00',
  savings_withdraw_requests: 0,
  reward_hbd_balance: '1.000 HBD',
  reward_hive_balance: '1.000 HIVE',
  reward_vesting_balance: '1.000000 VESTS',
  reward_vesting_hive: '1.000 HIVE',
  vesting_shares: '1.000 VESTS',
  delegated_vesting_shares: '1.000000 VESTS',
  received_vesting_shares: '1.000000 VESTS',
  vesting_withdraw_rate: '1.000000 VESTS',
  post_voting_power: '1.000 VESTS',
  next_vesting_withdrawal: '1969-12-31T23:59:59',
  withdrawn: 0,
  to_withdraw: 0,
  withdraw_routes: 0,
  pending_transfers: 0,
  curation_rewards: 0,
  posting_rewards: 0,
  proxied_vsf_votes: [0, 0, 0, 0],
  witnesses_voted_for: 0,
  last_post: '1970-01-01T00:00:00',
  last_root_post: '1970-01-01T00:00:00',
  last_vote_time: '1970-01-01T00:00:00',
  post_bandwidth: 0,
  pending_claimed_accounts: 0,
  governance_vote_expiration_ts: '1969-12-31T23:59:59',
  delayed_votes: [],
  open_recurrent_transfers: 0,
  vesting_balance: '1.000 HIVE',
  reputation: 0,
  transfer_history: [],
  market_history: [],
  post_history: [],
  vote_history: [],
  other_history: [],
  witness_votes: [],
  tags_usage: [],
  guest_bloggers: [],
  owner_challenged: false,
  active_challenged: false,
  last_owner_proved: '',
  average_bandwidth: '100000',
  last_bandwidth_update: '',
  lifetime_market_bandwidth: '',
  last_market_bandwidth_update: '',
  average_market_bandwidth: '',
  lifetime_bandwidth: '',
  last_active_proved: '',
};

const fakeQuentinAccResponseWithNoAuth = {
  id: 9455,
  name: 'quentin',
  owner: { weight_threshold: 1, account_auths: [], key_auths: [] },
  active: { weight_threshold: 1, account_auths: [], key_auths: [] },
  posting: {
    weight_threshold: 1,
    account_auths: [],
    key_auths: [],
  },
  memo_key: 'STM5NT27Z4XVgtpxTf6i5uB9pYmXC6syiHUSqzVZvQ1iN8BgJsLC2',
  json_metadata: '',
  posting_json_metadata: '',
  proxy: '',
  previous_owner_update: '1970-01-01T00:00:00',
  last_owner_update: '1970-01-01T00:00:00',
  last_account_update: '1970-01-01T00:00:00',
  created: '2016-05-23T03:24:00',
  mined: true,
  recovery_account: 'steem',
  last_account_recovery: '1970-01-01T00:00:00',
  reset_account: 'null',
  comment_count: 0,
  lifetime_vote_count: 0,
  post_count: 0,
  can_vote: true,
  voting_manabar: { current_mana: 10000, last_update_time: 1463973840 },
  downvote_manabar: { current_mana: 0, last_update_time: 1463973840 },
  voting_power: 10000,
  balance: '1.000 HIVE',
  savings_balance: '1.000 HIVE',
  hbd_balance: '1.000 HBD',
  hbd_seconds: '0',
  hbd_seconds_last_update: '1970-01-01T00:00:00',
  hbd_last_interest_payment: '1970-01-01T00:00:00',
  savings_hbd_balance: '1.000 HBD',
  savings_hbd_seconds: '0',
  savings_hbd_seconds_last_update: '1970-01-01T00:00:00',
  savings_hbd_last_interest_payment: '1970-01-01T00:00:00',
  savings_withdraw_requests: 0,
  reward_hbd_balance: '1.000 HBD',
  reward_hive_balance: '1.000 HIVE',
  reward_vesting_balance: '1.000000 VESTS',
  reward_vesting_hive: '1.000 HIVE',
  vesting_shares: '1.000 VESTS',
  delegated_vesting_shares: '1.000000 VESTS',
  received_vesting_shares: '1.000000 VESTS',
  vesting_withdraw_rate: '1.000000 VESTS',
  post_voting_power: '1.000 VESTS',
  next_vesting_withdrawal: '1969-12-31T23:59:59',
  withdrawn: 0,
  to_withdraw: 0,
  withdraw_routes: 0,
  pending_transfers: 0,
  curation_rewards: 0,
  posting_rewards: 0,
  proxied_vsf_votes: [0, 0, 0, 0],
  witnesses_voted_for: 0,
  last_post: '1970-01-01T00:00:00',
  last_root_post: '1970-01-01T00:00:00',
  last_vote_time: '1970-01-01T00:00:00',
  post_bandwidth: 0,
  pending_claimed_accounts: 0,
  governance_vote_expiration_ts: '1969-12-31T23:59:59',
  delayed_votes: [],
  open_recurrent_transfers: 0,
  vesting_balance: '1.000 HIVE',
  reputation: 0,
  transfer_history: [],
  market_history: [],
  post_history: [],
  vote_history: [],
  other_history: [],
  witness_votes: [],
  tags_usage: [],
  guest_bloggers: [],
  owner_challenged: false,
  active_challenged: false,
  last_owner_proved: '',
  average_bandwidth: '100000',
  last_bandwidth_update: '',
  lifetime_market_bandwidth: '',
  last_market_bandwidth_update: '',
  average_market_bandwidth: '',
  lifetime_bandwidth: '',
  last_active_proved: '',
};
//data for specific test files
//To be used on: format.utils.tests.ts
//for nFormatter
const iterationValuesNoDecimals = [
  { input: 1e3, expectedString: '1k' },
  { input: 10e3, expectedString: '10k' },
  { input: 100e3, expectedString: '100k' },
  { input: 1e6, expectedString: '1M' },
  { input: 10e6, expectedString: '10M' },
  { input: 100e6, expectedString: '100M' },
  { input: 1e9, expectedString: '1G' },
  { input: 10e9, expectedString: '10G' },
  { input: 100e9, expectedString: '100G' },
  { input: 1e12, expectedString: '1T' },
  { input: 10e12, expectedString: '10T' },
  { input: 100e12, expectedString: '100T' },
  { input: 1e15, expectedString: '1P' },
  { input: 10e15, expectedString: '10P' },
  { input: 100e15, expectedString: '100P' },
  { input: 1e18, expectedString: '1E' },
];

const iterationValuesWithDecimals1 = [
  { input: 0.0, expectedString: '0', decimals: 1 },
  { input: 0.0, expectedString: '0', decimals: 2 },
  { input: 0.1, expectedString: '0.1', decimals: 1 },
  { input: 0.1234, expectedString: '0.12', decimals: 2 },
  { input: 0.1234, expectedString: '0.123', decimals: 3 },
  { input: 0.1234, expectedString: '0.1234', decimals: 4 },
];

const iterationValuesWithDecimals2 = [
  { input: 1000.0123, expectedString: '1k', decimals: 1 },
  { input: 100000.0123, expectedString: '100k', decimals: 2 },
  { input: 10000000.1, expectedString: '10M', decimals: 1 },
  { input: 1000000000000.1234, expectedString: '1T', decimals: 2 },
  { input: 10000000000000.12345432, expectedString: '10T', decimals: 5 },
  { input: 10000045600000.12345432, expectedString: '10.00005T', decimals: 5 },
  { input: 100000000000000.12345432, expectedString: '100T', decimals: 4 },
  { input: 1450000000000000.12345432, expectedString: '1.45P', decimals: 4 },
];
//end for nFormatter

//for hive-engine.utils
//Mocking responses API HIVE -> Tokens.
const getFakeTransactionInfo = {
  logErrors: [
    {
      typeError: 'symbol_not_exist',
      fakeBlockDataResponse: {
        blockNumber: 17301178,
        refHiveBlockNumber: 64291054,
        transactionId: '4dbf9462be2cbeb9d970fc777cea795521284fc1',
        sender: 'workerjab1',
        contract: 'tokens',
        action: 'stake',
        payload:
          '{"to":"workerjab1","symbol":"HIVE","quantity":"0.1","isSignedWithActiveKey":true}',
        executedCodeHash:
          '815ad74975ef2099fb0d332f42eb5503e27c52c78002f3d408fb0ca67bc37edb',
        hash: 'f14b438daad79be8c4f359e3dc58e85a2ff9bc4256f470e4208fe5b3ddb37efb',
        databaseHash:
          '77f388ce4c4a5c625fcc09ff4e3f5e9389c27b7bd78d010357b13ff97df2d9c6',
        logs: '{"errors":["symbol does not exist"]}',
      },
    },
    {
      typeError: 'staking_not_enabled',
      fakeBlockDataResponse: {
        blockNumber: 17317874,
        refHiveBlockNumber: 64307759,
        transactionId: '2e5e95280ce4356b3eefc76b4ac30ace70f70cde',
        sender: 'workerjab1',
        contract: 'tokens',
        action: 'stake',
        payload:
          '{"to":"workerjab1","symbol":"SPS","quantity":"0.1","isSignedWithActiveKey":true}',
        executedCodeHash:
          '815ad74975ef2099fb0d332f42eb5503e27c52c78002f3d408fb0ca67bc37edb',
        hash: '47dce43771f4da8020428bf88a24e6eab34fa5b882c3281bb6840dda0080c4bb',
        databaseHash:
          'f7614ac1d8c8d59aa79ac03f28f22a0516cd765cfe1f77a21da706dc09cf0a23',
        logs: '{"errors":["staking not enabled"]}',
      },
    },
    {
      typeError: 'balance_does_not_exist',
      fakeBlockDataResponse: {
        blockNumber: 17318075,
        refHiveBlockNumber: 64307960,
        transactionId: 'a3a105d9e3d254c5d5bbf0ea91395d3d92bc2c9f',
        sender: 'workerjab1',
        contract: 'tokens',
        action: 'stake',
        payload:
          '{"to":"workerjab1","symbol":"LEO","quantity":"0.1","isSignedWithActiveKey":true}',
        executedCodeHash:
          '815ad74975ef2099fb0d332f42eb5503e27c52c78002f3d408fb0ca67bc37edb',
        hash: 'eecc338c2ae8563a679dbdb9853e6d074edbb511dac2fb9eaa5c24b946e0c838',
        databaseHash:
          'aff267166a5dbb9dcaa17209f1fba3ff1799a05e66e743f280397181fd031678',
        logs: '{"errors":["balance does not exist"]}',
      },
    },
    {
      typeError: 'symbol_precision_mismatch',
      fakeBlockDataResponse: {
        blockNumber: 17318676,
        refHiveBlockNumber: 64308562,
        transactionId: 'cc47d88589b9977260f96629a310e646e9268800',
        sender: 'workerjab1',
        contract: 'tokens',
        action: 'stake',
        payload:
          '{"to":"workerjab1","symbol":"CTPM","quantity":"0.00000001","isSignedWithActiveKey":true}',
        executedCodeHash:
          '815ad74975ef2099fb0d332f42eb5503e27c52c78002f3d408fb0ca67bc37edb',
        hash: '856ba05419de95c44bc91efe1297ce682f696b9f4854c2d32bcda4bb488a97a9',
        databaseHash:
          '48939031f4210b7582caba0ce5527ed683a71fd20be5174d8d2ba970c9d97e47',
        logs: '{"errors":["symbol precision mismatch"]}',
      },
    },
    {
      typeError: 'overdrawn_balance',
      fakeBlockDataResponse: {
        blockNumber: 17319064,
        refHiveBlockNumber: 64308950,
        transactionId: '803e8c82a48d5c9a452df2eb96bf49996f300f06',
        sender: 'workerjab1',
        contract: 'tokens',
        action: 'stake',
        payload:
          '{"to":"workerjab1","symbol":"CTPM","quantity":"10","isSignedWithActiveKey":true}',
        executedCodeHash:
          '815ad74975ef2099fb0d332f42eb5503e27c52c78002f3d408fb0ca67bc37edb',
        hash: 'd3a44a6a902fae21104513041edbfcbc7edc3200668a5c02392c300d8b791824',
        databaseHash:
          '2bbfd08c6ff2b4286bdb6831b5465a002a2adbdbb6b37362c707a3c4ed1cd3cd',
        logs: '{"errors":["overdrawn balance"]}',
      },
    },
  ],
  onSucessStake: {
    blockNumber: 17318440,
    refHiveBlockNumber: 64308326,
    transactionId: 'd9cb2e5a92aaf39829acfa57fe1481340e412644',
    sender: 'workerjab1',
    contract: 'tokens',
    action: 'stake',
    payload:
      '{"to":"workerjab1","symbol":"CTPM","quantity":"0.1","isSignedWithActiveKey":true}',
    executedCodeHash:
      '815ad74975ef2099fb0d332f42eb5503e27c52c78002f3d408fb0ca67bc37edb139f5a4f412cdf6f2c8edb3df8f3d6d5334754e62bc4982d392aea34ac085c3a7fbee164be0e58a72b6e9b0441e6086fd2b9513d8034e0e315d70ae13478177c',
    hash: 'c8b6ffe196d1ac084436df627422f64748357c756d6c9e93a7deb1c085618325',
    databaseHash:
      'f2a31e96e3d85f83833bb1bdf1268b516a22b173d938d50501d542705f93f692',
    logs: '{"events":[{"contract":"tokens","event":"stake","data":{"account":"workerjab1","symbol":"CTPM","quantity":"0.1"}}]}',
  },
};
const fakeResponseHavingTokenBalances = [
  {
    _id: 186225,
    account: 'workerjab1',
    symbol: 'SWAP.HIVE',
    balance: '0.00000000',
    stake: '0',
    pendingUnstake: '0',
    delegationsIn: '0',
    delegationsOut: '0',
    pendingUndelegations: '0',
  },
  {
    _id: 186226,
    account: 'workerjab1',
    symbol: 'BEE',
    balance: '1.00565819',
    stake: '0',
    pendingUnstake: '0',
    delegationsIn: '0',
    delegationsOut: '0',
    pendingUndelegations: '0',
  },
  {
    _id: 459696,
    account: 'workerjab1',
    symbol: 'WAIV',
    balance: '0',
    stake: '10.00000000',
    pendingUnstake: '0',
    delegationsIn: '0',
    delegationsOut: '0',
    pendingUndelegations: '0',
  },
  {
    _id: 947092,
    account: 'workerjab1',
    symbol: 'CTPM',
    balance: '1.900',
    stake: '0.100',
    pendingUnstake: '0',
    delegationsIn: '0',
    delegationsOut: '0',
    pendingUndelegations: '0',
  },
];

const fakeIncommingDelegations = [
  {
    _id: 1454,
    from: 'discohedge',
    to: 'upfundme',
    symbol: 'BEE',
    quantity: '58.07691880',
    created: 1607062680000,
    updated: 1627314099000,
  },
  {
    _id: 1906,
    from: 'archon-mining',
    to: 'upfundme',
    symbol: 'BEE',
    quantity: '282.23886099',
    created: 1612166238000,
    updated: 1634164284000,
  },
];
const fakeOutgoingDelegations = [
  {
    _id: 3781,
    from: 'coininstant',
    to: 'firealien',
    symbol: 'BEE',
    quantity: '11',
    created: 1617321279000,
    updated: 1617321279000,
  },
];
//end for hive-engine.utils

//To be used on: hive.utils
//for getTimeBeforeFull
const votingPowerArrayTest = [
  { votingPower: 90.0, expectedMessageArray: ['full_in', ['12 hours']] },
  { votingPower: 80.0, expectedMessageArray: ['full_in', ['1 day']] },
  {
    votingPower: 70.0,
    expectedMessageArray: ['full_in', ['1 day and 12 hours']],
  },
  { votingPower: 60.0, expectedMessageArray: ['full_in', ['2 days']] },
  {
    votingPower: 50.0,
    expectedMessageArray: ['full_in', ['2 days and 12 hours']],
  },
  { votingPower: 40.0, expectedMessageArray: ['full_in', ['3 days']] },
  {
    votingPower: 30.0,
    expectedMessageArray: ['full_in', ['3 days and 12 hours']],
  },
  { votingPower: 20.0, expectedMessageArray: ['full_in', ['4 days']] },
  {
    votingPower: 10.0,
    expectedMessageArray: ['full_in', ['4 days and 12 hours']],
  },
  { votingPower: 0.0, expectedMessageArray: ['full_in', ['5 days']] },
];
//for getConversionRequests
const fakeHbdConversionsResponse = [
  {
    id: 275431,
    owner: 'wesp05',
    requestid: 1,
    amount: '2.500 HBD',
    conversion_date: '2022-05-15T11:02:09',
  },
];
const fakeHiveConversionsResponse = [
  {
    id: 275431,
    owner: 'wesp05',
    requestid: 1,
    collateral_amount: '22.500 HIVE',
    conversion_date: '2022-05-10T11:02:09',
  },
];
//for getDelegators
const fakeGetDelegatorsResponse = [
  {
    delegation_date: '2017-08-09T15:30:36.000Z',
    delegator: 'kriborin',
    vesting_shares: 31692093.5887,
  },
  {
    delegation_date: '2017-08-09T15:29:42.000Z',
    delegator: 'kevtorin',
    vesting_shares: 31691975.1647,
  },
  {
    delegation_date: '2017-08-09T15:31:48.000Z',
    delegator: 'lessys',
    vesting_shares: 29188598.7866,
  },
];
const fakeGetDelegateesResponse = [
  {
    id: 270663,
    delegator: 'blocktrades',
    delegatee: 'buildawhale',
    vesting_shares: '100.000000 VESTS',
    min_delegation_time: '2017-09-29T02:19:03',
  },
  {
    id: 933999,
    delegator: 'blocktrades',
    delegatee: 'ocdb',
    vesting_shares: '200.902605 VESTS',
    min_delegation_time: '2018-05-25T22:14:30',
  },
  {
    id: 1350016,
    delegator: 'blocktrades',
    delegatee: 'usainvote',
    vesting_shares: '300.000000 VESTS',
    min_delegation_time: '2020-08-16T05:34:33',
  },
  {
    id: 1350016,
    delegator: 'blocktrades',
    delegatee: 'usainvote2',
    vesting_shares: '0 VESTS',
    min_delegation_time: '2020-08-16T05:34:33',
  },
];
//End To be used on: hive.utils

//for proposal.utils
const fakeVotedAccountResponse = [
  {
    id: 90661,
    voter: 'theghost1980',
    proposal: {
      id: 216,
      proposal_id: 216,
      creator: 'keychain',
      receiver: 'keychain',
      start_date: '2022-05-15T00:00:00',
      end_date: '2023-05-15T00:00:00',
      daily_pay: [Object],
      subject: 'Hive Keychain development',
      permlink: 'hive-keychain-proposal-dhf-ran717',
      total_votes: '61237185339413554',
      status: 'active',
    },
  },
];
const fakeProposalListResponse = {
  proposals: [
    {
      id: 214,
      proposal_id: 214,
      creator: 'howo',
      receiver: 'howo',
      start_date: '2022-04-27T00:00:00',
      end_date: '2023-04-27T00:00:00',
      daily_pay: { amount: '330000', precision: 3, nai: '@@000000013' },
      subject: 'Core development of hive and communities year 3',
      permlink: 'core-development-proposal-year-3',
      total_votes: '84323179888178111',
      status: 'active',
    },
    {
      id: 185,
      proposal_id: 185,
      creator: 'hivewatchers',
      receiver: 'hivewatchers',
      start_date: '2021-08-01T00:00:00',
      end_date: '2022-07-31T00:00:00',
      daily_pay: { amount: '330000', precision: 3, nai: '@@000000013' },
      subject: 'The Hivewatchers & Spaminator Operational Proposal',
      permlink: 'the-hivewatchers-and-spaminator-operational-proposal',
      total_votes: '74818760284017953',
      status: 'active',
    },
    {
      id: 201,
      proposal_id: 201,
      creator: 'brianoflondon',
      receiver: 'v4vapp.dhf',
      start_date: '2022-01-23T00:00:00',
      end_date: '2022-05-23T00:00:00',
      daily_pay: { amount: '330000', precision: 3, nai: '@@000000013' },
      subject:
        'Continuation: Hive to Value 4 Value - The Hive <> Bitcoin Lightning Bridge',
      permlink:
        'v4vapp-updates-ongoing-funding-proposal-for-the-btc-lightning-to-hive-bi-directional-bridge',
      total_votes: '73774153416233168',
      status: 'active',
    },
  ],
};
const fakeProposalKeyChain = {
  id: 216,
  proposal_id: 216,
  creator: 'keychain',
  receiver: 'keychain',
  start_date: '2022-05-15T00:00:00',
  end_date: '2023-05-15T00:00:00',
  daily_pay: { amount: '390000', precision: 3, nai: '@@000000013' },
  subject: 'Hive Keychain development',
  permlink: 'hive-keychain-proposal-dhf-ran717',
  total_votes: '61237185339413554',
  status: 'active',
};
const fakeProposal2 = {
  id: 140,
  proposal_id: 140,
  creator: 'keychain',
  receiver: 'keychain',
  start_date: '2020-11-15T00:00:00',
  end_date: '2021-05-15T00:00:00',
  daily_pay: { amount: '200000', precision: 3, nai: '@@000000013' },
  subject: 'Hive Keychain Development #2',
  permlink: 'hive-keychain-development-proposal-2',
  total_votes: '50549679283763983',
  status: 'expired',
};
const fakeListProposalVotesResponse = {
  proposal_votes: [
    { id: 90661, voter: 'theghost1980', proposal: fakeProposalKeyChain },
    // { id: 92195, voter: 'theghost1980', proposal: fakeProposalKeyChain },
    // { id: 56050, voter: 'theghost1980', proposal: fakeProposalKeyChain },
    // { id: 59685, voter: 'theghost1980', proposal: fakeProposalKeyChain },
    { id: 72478, voter: 'thefukel', proposal: fakeProposal2 },
    { id: 80828, voter: 'theflamingwings', proposal: fakeProposal2 },
    { id: 83430, voter: 'thefiery', proposal: fakeProposal2 },
  ],
};
const fakeDailyBudgetResponse = 16259983.208;
const expectedResultProposal = [
  {
    creator: 'howo',
    dailyPay: '330 HBD',
    endDate: moment('2023-04-27T00:00:00'),
    startDate: moment('2022-04-27T00:00:00'),
    funded: 'totally_funded',
    id: 214,
    link: 'https://peakd.com/proposals/214',
    proposalId: 214,
    receiver: 'howo',
    subject: 'Core development of hive and communities year 3',
    totalVotes: '0 HP',
    voted: false,
  },
  {
    creator: 'hivewatchers',
    dailyPay: '330 HBD',
    endDate: moment('2022-07-31T00:00:00'),
    startDate: moment('2021-08-01T00:00:00'),
    funded: 'totally_funded',
    id: 185,
    link: 'https://peakd.com/proposals/185',
    proposalId: 185,
    receiver: 'hivewatchers',
    subject: 'The Hivewatchers & Spaminator Operational Proposal',
    totalVotes: '0 HP',
    voted: false,
  },
  {
    creator: 'brianoflondon',
    dailyPay: '330 HBD',
    endDate: moment('2022-05-23T00:00:00'),
    startDate: moment('2022-01-23T00:00:00'),
    funded: 'totally_funded',
    id: 201,
    link: 'https://peakd.com/proposals/201',
    proposalId: 201,
    receiver: 'v4vapp.dhf',
    subject:
      'Continuation: Hive to Value 4 Value - The Hive <> Bitcoin Lightning Bridge',
    totalVotes: '0 HP',
    voted: false,
  },
];
//end for proposal.utils

//end data for specific test files

const bittrexResultArray = [
  {
    Currency: 'BTC',
    CurrencyLong: 'Bitcoin',
    MinConfirmation: 2,
    TxFee: 0.0003,
    IsActive: true,
    IsRestricted: false,
    CoinType: 'BITCOIN',
    BaseAddress: '1N52wHoVR79PMDishab2XmRHsbekCdGquK',
    Notice: '',
  },
  {
    Currency: 'LTC',
    CurrencyLong: 'Litecoin',
    MinConfirmation: 6,
    TxFee: 0.01,
    IsActive: true,
    IsRestricted: false,
    CoinType: 'BITCOIN16',
    BaseAddress: 'LhyLNfBkoKshT7R8Pce6vkB9T2cP2o84hx',
    Notice: '',
  },
];

const utilsT = {
  dataUserExtended,
  cedricDataSample,
  dynamicPropertiesObj,
  fakeQuentinAccResponseWithAuth,
  fakeQuentinAccResponseWithNoAuth,
  bittrexResultArray,
  userData,
  userData2,
  iterationValuesNoDecimals,
  iterationValuesWithDecimals1,
  iterationValuesWithDecimals2,
  fakeResponseHavingTokenBalances,
  fakeIncommingDelegations,
  fakeOutgoingDelegations,
  votingPowerArrayTest,
  fakeHbdConversionsResponse,
  fakeHiveConversionsResponse,
  fakeGetDelegatorsResponse,
  fakeGetDelegateesResponse,
  fakeVotedAccountResponse,
  fakeProposalListResponse,
  fakeListProposalVotesResponse,
  fakeDailyBudgetResponse,
  expectedResultProposal,
  fakeProposalKeyChain,
};

export default utilsT;
