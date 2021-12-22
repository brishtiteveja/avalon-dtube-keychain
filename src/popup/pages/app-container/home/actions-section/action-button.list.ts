import { Icons } from '@popup/icons.enum';
import { ActionButton } from 'src/interfaces/action-button.interface';
import { Screen } from 'src/reference-data/screen.enum';

export const ActionButtonList: ActionButton[] = [
  {
    label: 'popup_html_send_transfer',
    nextScreen: Screen.TRANSFER_FUND_PAGE,
    nextScreenParams: { selectedCurrency: 'hive' },
    icon: Icons.SEND,
  },
  {
    label: 'popup_html_history',
    icon: Icons.HISTORY,
    nextScreen: Screen.WALLET_HISTORY_PAGE,
  },
  {
    label: 'popup_html_tokens',
    icon: Icons.TOKENS,
    nextScreen: Screen.TOKENS_PAGE,
  },
  {
    label: 'popup_html_governance',
    icon: 'solo',
    importedIcon: true,
    nextScreen: Screen.GOVERNANCE_PAGE,
  },
];
