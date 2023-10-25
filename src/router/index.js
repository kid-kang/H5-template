import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/default',
    },
    {
      path: '/default',
      component: () => import('../pages/default/index.vue'),
      meta: {
        title: '星星充电',
      },
    },
  ],
})
export default router
