// import axios from 'axios'
import request from '@/axios/aaa'
import to from 'await-to-js'
export const getDate = async () => {
  const [err, res] = await to(request.get('/homepage/block/page'))
  if (err) {
    console.log('请求出错')
  }
  return res
}
export const getSong = (id) => {
  return request.get('/playlist/track/all', {
    params: {
      id: id,
      limit: 50,
      offset: 1
    }
  })
}
export const getk = (id) => {
  return request.get('/playlist/detail', {
    params: {
      id: id
    }
  })
}
export const login = (data) => {
  return request.get('/login/cellphone', {
    params: data
  })
}
export const getCode = (data) => {
  return request.get('/captcha/sent', {
    params: {
      phone: data
    }
  })
}
export const getStatus = () => {
  return request.get('/user/account')
}
