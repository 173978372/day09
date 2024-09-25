import { defineStore } from 'pinia'
import { login, getStatus } from '@/axios'
import to from 'await-to-js'
import router from '@/router'

//全局数据最少要一个store来承载
export const useCountStore = defineStore('count', {
  //全局的状态定义在state函数的返回的对象中
  state() {
    return {
      count: 1
    }
  },
  actions: {
    add() {
      this.count++
    },
    setValue(value) {
      this.count = value
    }
  }
})
export const useUserStore = defineStore('user', {
  state() {
    return {
      useInfo: null
    }
  },
  actions: {
    async useLogin(data) {
      const [err, res] = await to(login(data))
      if (res) {
        this.useInfo = res.data
        router.push('/')
      }
    }
  }
})
export const usePlayListStore = defineStore('playlist', {})
export const useXinxiStore = defineStore('xinxi', {
  state() {
    return {
      userLogin: null
    }
  },
  actions: {
    async page(id) {
      const [err, res] = await to(getStatus(id))

      if (res) {
        this.userLogin = res
      }
    }
  }
})
