import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/zong.vue'
import Song from '@/components/gequ.vue'
import LogIn from '@/views/LogIn.vue'
import localforage from 'localforage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  if (!to.fullPath.startsWith('/login') ) {
    console.log(1);
    localforage
      .getItem('useInfo')
      .then(({ cookie }) => {
        if (cookie) {
          next()
        } else {
         
          next('/login?a=1')
        }
      })
      .catch(() => {
    
        next('/login?b=2')
      })
  } else {
    next()
  }
})
export default router
