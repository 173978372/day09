import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/zong.vue'
import Song from '@/components/gequ.vue'
import LogIn from '@/views/LogIn.vue'
import localforage from 'localforage'
import HookPage from '@/views/hook/hookPage.vue'
import UserPage from '@/views/children/user.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: UserPage
  },
  {
    path: '/hook',
    name: 'hook',
    component: HookPage
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
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

router.beforeEach((to, from, next) => {
  if (!to.fullPath.startsWith('/login')) {
    localforage
      .getItem('useInfo')
      .then(({ cookie }) => {
        if (cookie) {
          next()
        } else {
          next(`/login?originPath=${to.fullPath}`)
        }
      })
      .catch(() => {
        next(`/login?originPath=${to.fullPath}`)
      })
  } else {
    next()
  }
})
export default router
