// import axios from 'axios'
import request from '@/axios/aaa'
export const getDate = request.get('/homepage/block/page')
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
