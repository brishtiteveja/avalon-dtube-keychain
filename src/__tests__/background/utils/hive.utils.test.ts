import AccountUtils from 'src/utils/account.utils';
import { RewardsUtils } from 'src/utils/rewards.utils';
import { SavingsUtils } from 'src/utils/savings.utils';
import hiveUtilsMocks from 'src/__tests__/background/utils/mocks/hive.utils.mocks';
import { errorClaimAccounts } from 'src/__tests__/background/utils/mocks/hive.utils.references/errors/claim-accounts-errors';
import { errorClaimRewards } from 'src/__tests__/background/utils/mocks/hive.utils.references/errors/claim-rewards-errors';
import accounts from 'src/__tests__/utils-for-testing/data/accounts';
import confirmations from 'src/__tests__/utils-for-testing/data/confirmations';
import mk from 'src/__tests__/utils-for-testing/data/mk';
describe('hive.utils tests:\n', () => {
  const { mocks, method, spies } = hiveUtilsMocks;
  const { constants } = hiveUtilsMocks;
  const { client, tuple, noPendings } = constants;
  method.afterEach;
  describe('claimRewards cases:\n', () => {
    it('Must return false on each error', async () => {
      for (let i = 0; i < errorClaimRewards.length; i++) {
        const element = errorClaimRewards[i];
        element.mocks();
        expect(await RewardsUtils.claimRewards(...element.params)).toBe(false);
      }
    });
    it('Must return true', async () => {
      // mocks.getClient(client); TODO fix here
      mocks.sendOperations(confirmations.trx);
      expect(await RewardsUtils.claimRewards(...tuple.assets._string)).toBe(
        true,
      );
    });
  });
  describe('claimAccounts cases:\n', () => {
    it('Must call logger on each error', async () => {
      for (let i = 0; i < errorClaimAccounts.length; i++) {
        const element = errorClaimAccounts[i];
        element.mocks();
        await AccountUtils.claimAccounts(...element.params);
        const { calls } = element.spies.using.mock;
        if (typeof calls[0][0] === 'string') {
          expect(calls[0][0]).toContain(element.description);
        } else {
          expect((calls[0][0] as TypeError).message).toContain(
            element.description,
          );
        }
        element.spies.using.mockReset();
      }
    });
    it('Must call logger with success', async () => {
      // mocks.getClient(client);  TODO fix here
      mocks.setConfigAsMin();
      mocks.sendOperations;
      await AccountUtils.claimAccounts(...tuple.claimAccounts);
      expect(spies.logger.info).toBeCalledWith(
        `Claiming free account for @${mk.user.one}`,
      );
    });
  });
  describe('claimSavings cases:\n', () => {
    describe('hbd_balance cases:\n', () => {
      it('Must return true passing string', async () => {
        // mocks.getClient(client);  TODO fix here
        mocks.sendOperations;
        const activeAccountHasHbd = method.reset(
          'savings_hbd_balance',
          accounts.active,
        );
        expect(await SavingsUtils.claimSavings(activeAccountHasHbd)).toBe(true);
      });
      it('Must return true if passing Asset', async () => {
        // mocks.getClient(client);  TODO fix here
        mocks.sendOperations;
        const activeAccountHasHbd = method.reset(
          'savings_hbd_balance',
          accounts.active,
          true,
        );
        expect(await SavingsUtils.claimSavings(activeAccountHasHbd)).toBe(true);
      });
      it('Must return false on each error', async () => {
        await method.assertErrors('savings_hbd_balance');
      });
      it('Must call logger with nothing to claim', async () => {
        const noBalances = method.resetBothBalances(accounts.active);
        await SavingsUtils.claimSavings(noBalances);
        expect(spies.logger.error).toBeCalledWith(noPendings);
      });
    });
    describe('savings_hbd_balance cases:\n', () => {
      it('Must return true', async () => {
        // mocks.getClient(client); TODO fix here
        mocks.sendOperations;
        const activeAccountHasHbd = method.reset(
          'hbd_balance',
          accounts.active,
        );
        expect(await SavingsUtils.claimSavings(activeAccountHasHbd)).toBe(true);
      });
      it('Must return true if passing Asset', async () => {
        // mocks.getClient(client); TODO fix here
        mocks.sendOperations;
        const activeAccountHasHbd = method.reset(
          'hbd_balance',
          accounts.active,
          true,
        );
        expect(await SavingsUtils.claimSavings(activeAccountHasHbd)).toBe(true);
      });
      it('Must return false on each error', async () => {
        await method.assertErrors('hbd_balance');
      });
    });
  });
});
