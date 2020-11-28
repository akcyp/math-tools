import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'storage', component: () => import('pages/Storage.vue') },
      { path: 'prime', component: () => import('pages/Prime.vue') },
      { path: 'conversion', component: () => import('pages/Conversion.vue') },
      { path: 'roman', component: () => import('pages/RomanNumeral.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
