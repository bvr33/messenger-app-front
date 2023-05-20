import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/modules/about/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/modules/chat/views/ChatView.vue')
    }
  ]
})

export default router
