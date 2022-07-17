import { createRouter, createWebHistory } from 'vue-router';
import Currencies from '../components/Currencies.vue';

const router = createRouter({
  history: createWebHistory('/exchange-rate/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Currencies
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
