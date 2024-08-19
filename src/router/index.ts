import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { h } from 'vue'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import LandingLayout from '../layouts/LandingLayout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
  {
    path: '/',
    component: LandingLayout,
  },
  {
    name: 'admin',
    path: '/administrator',
    component: AppLayout,
    redirect: { name: 'dashboard' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'settings',
        path: 'settings',
        component: () => import('../pages/settings/Settings.vue'),
      },
      {
        name: 'preferences',
        path: 'preferences',
        component: () => import('../pages/preferences/Preferences.vue'),
      },
      {
        path: 'lakes',
        children: [
          // {
          // path: 'lakes',
          // children: [
          {
            name: 'list',
            path: 'list',
            component: () => import('../pages/lakes/LakesPage.vue'),
            // children: [
            //   {
            //     name: 'lake',
            //     path: ':id',
            //     component: () => import('../pages/lakes/ViewLakePage.vue'),
            //   }
            // ]
          },
          {
            name: 'create',
            path: 'create',
            component: () => import('../pages/lakes/CreateLakePage.vue'),
          },
          {
            name: 'lake',
            path: ':id',
            component: () => import('../pages/lakes/ViewLakePage.vue'),
          },
          //   ]
          // },
          // {
          //   name: 'lake-create',
          //   path: 'lake-create',
          //   component: () => import('../pages/lakes/CreateLakePage.vue'),
          // },
        ],
      },
      {
        name: 'river',
        path: 'river',
        component: RouteViewComponent,
        children: [
          {
            name: 'river-list',
            path: 'river-list',
            component: () => import('../pages/rivers/RiversPage.vue'),
          },
          {
            name: 'river-create',
            path: 'river-create',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
        ],
      },
      {
        name: 'dam',
        path: 'dam',
        component: RouteViewComponent,
        children: [
          {
            name: 'dam-list',
            path: 'dam-list',
            component: () => import('../pages/dams/DamsPage.vue'),
          },
          {
            name: 'dam-create',
            path: 'dam-create',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
        ],
      },
      {
        name: 'projects',
        path: 'projects',
        component: () => import('../pages/projects/ProjectsPage.vue'),
      },
      {
        name: 'payments',
        path: '/payments',
        component: RouteViewComponent,
        children: [
          {
            name: 'payment-methods',
            path: 'payment-methods',
            component: () => import('../pages/payments/PaymentsPage.vue'),
          },
          {
            name: 'billing',
            path: 'billing',
            component: () => import('../pages/billing/BillingPage.vue'),
          },
          {
            name: 'pricing-plans',
            path: 'pricing-plans',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
          },
        ],
      },
      {
        name: 'faq',
        path: '/faq',
        component: () => import('../pages/faq/FaqPage.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: AuthLayout,
    children: [
      {
        name: '',
        path: '',
        component: () => import('../pages/auth/Login.vue'),
      },
      // {
      //   name: 'signup',
      //   path: 'signup',
      //   component: () => import('../pages/auth/Signup.vue'),
      // },
      // {
      //   name: 'recover-password',
      //   path: 'recover-password',
      //   component: () => import('../pages/auth/RecoverPassword.vue'),
      // },
      // {
      //   name: 'recover-password-email',
      //   path: 'recover-password-email',
      //   component: () => import('../pages/auth/CheckTheEmail.vue'),
      // },
      // {
      //   path: '',
      //   redirect: { name: 'login' },
      // },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
