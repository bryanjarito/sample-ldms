import lake from '../../assets/icons/lake.svg?raw'
import river from '../../assets/icons/river.svg?raw'
import dam from '../../assets/icons/dam.svg?raw'

export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'dashboard',
      },
    },
    {
      name: 'lakes',
      displayName: 'Lakes',
      meta: {
        svgIcon: lake,
      },
      children: [
        {
          name: 'list',
          displayName: 'Lake list',
        },
        {
          name: 'create',
          displayName: 'Create Lake',
        }
      ],
    },
    {
      name: 'river',
      displayName: 'Rivers',
      meta: {
        svgIcon: river,
      },
      children: [
        {
          name: 'river-list',
          displayName: 'List',
        },
        {
          name: 'river-create',
          displayName: 'Create River',
        }
      ],
    },
    {
      name: 'dam',
      displayName: 'Dams',
      meta: {
        svgIcon: dam,
      },
      children: [
        {
          name: 'dam-list',
          displayName: 'List',
        },
        {
          name: 'dam-create',
          displayName: 'Create Dam',
        }
      ],
    },
    // {
    //   name: 'projects',
    //   displayName: 'menu.projects',
    //   meta: {
    //     icon: 'folder_shared',
    //   },
    // },
    // {
    //   name: 'payments',
    //   displayName: 'menu.payments',
    //   meta: {
    //     icon: 'credit_card',
    //   },
    //   children: [
    //     {
    //       name: 'payment-methods',
    //       displayName: 'menu.payment-methods',
    //     },
    //     {
    //       name: 'pricing-plans',
    //       displayName: 'menu.pricing-plans',
    //     },
    //     {
    //       name: 'billing',
    //       displayName: 'menu.billing',
    //     },
    //   ],
    // },
    // {
    //   name: 'auth',
    //   displayName: 'menu.auth',
    //   meta: {
    //     icon: 'login',
    //   },
    //   children: [
    //     {
    //       name: 'login',
    //       displayName: 'menu.login',
    //     },
    //     {
    //       name: 'signup',
    //       displayName: 'menu.signup',
    //     },
    //     {
    //       name: 'recover-password',
    //       displayName: 'menu.recover-password',
    //     },
    //   ],
    // },

    // {
    //   name: 'faq',
    //   displayName: 'menu.faq',
    //   meta: {
    //     icon: 'quiz',
    //   },
    // },
    // {
    //   name: '404',
    //   displayName: 'menu.404',
    //   meta: {
    //     icon: 'vuestic-iconset-files',
    //   },
    // },
    // {
    //   name: 'preferences',
    //   displayName: 'menu.preferences',
    //   meta: {
    //     icon: 'manage_accounts',
    //   },
    // },
    // {
    //   name: 'settings',
    //   displayName: 'menu.settings',
    //   meta: {
    //     icon: 'settings',
    //   },
    // },
  ] as INavigationRoute[],
}
