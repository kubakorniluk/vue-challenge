import { createRouter, createWebHistory } from 'vue-router'
import Config from '../views/Config.vue'

const router = createRouter({
  history: createWebHistory('/vue-challange/'),
  routes: [
    {
      path: '/',
      name: 'config',
      component: Config
    },
    {
      path: '/analize',
      name: 'analize',
      component: () => import('../views/Analize.vue')
    }
  ]
})

export default router
