import SettingsContent from '../Wrapper';
import Index from './Index.vue';
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/profile'),
      name: 'profile_settings',
      roles: ['administrator', 'agent'],
      component: SettingsContent,
      props: {
        headerTitle: 'GENERAL_SETTINGS.TITLE',
        icon: 'ion-compose',
        showNewButton: false,
      },
      children: [
        {
          path: 'settings',
          name: 'general_settings_index',
          component: Index,
          roles: ['administrator', 'agent'],
        },
      ],
    },
  ],
};
