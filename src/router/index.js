import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/zong.vue'
import Song from '@/components/gequ.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/song',
    name: 'song',
    component: Song
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
