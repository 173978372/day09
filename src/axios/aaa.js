import axios from 'axios'
import localforage from 'localforage'
import { showFailToast } from 'vant'
const request = axios.create({
  baseURL: 'https://wangyiyun-teal.vercel.app'
})

//请求拦截器(回调函数)
request.interceptors.request.use(async (config) => {
  const useInfo = await localforage.getItem('useInfo')
  const qw = {}
  if (useInfo && useInfo.cookie) {
    qw.cookie = useInfo.cookie
  }
  // config.params=Object.assign(config.params||{},qw)

  return config
})
//响应拦截器
request.interceptors.response.use((response) => {
  return response
})
export default request
