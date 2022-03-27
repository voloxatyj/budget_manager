
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/auth', 
        component: () => import('src/pages/Authentification.vue'),
        name: 'Authentification' 
      },
      {
        path: '/account',
        component: () => import('src/pages/Account.vue'),
        name: 'Account'
      },
      {
        path: '/budget',
        component: () => import('src/pages/Budget.vue'),
        name: 'Budget'
      },
      {
        path: '/starred',
        component: () => import('src/pages/Starred.vue'),
        name: 'Starred'
      },
      {
        path: '/settings',
        component: () => import('src/pages/Settings.vue'),
        name: 'Settings'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
