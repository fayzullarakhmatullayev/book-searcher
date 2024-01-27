import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@/routeGuards'

import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: authGuard
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: authGuard
    },
    {
      path: '/:name',
      name: 'detail',
      component: DetailView,
      beforeEnter: authGuard
    }
  ]
})

export default router
