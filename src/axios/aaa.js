import axios from 'axios'
import localforage from 'localforage'
import { showFailToast } from 'vant'
const http = axios.create({
  baseURL: 'https://wangyiyun-teal.vercel.app'
})

//请求拦截器(回调函数)
http.interceptors.request.use(async (config) => {
  const useInfo = await localforage.getItem('useInfo')
  const qw = {}
  if (useInfo?.cookie) qw.cookie = useInfo.cookie
  config.params = Object.assign(config.params || {}, qw)
  return config
})
//响应拦截器
http.interceptors.response.use((response) => {
  return response
})
export default http
