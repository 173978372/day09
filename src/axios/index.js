import axios from 'axios'
export const getDate = axios.get('https://wangyiyun-teal.vercel.app/homepage/block/page')
export const getSong = (id) => {
  return axios.get('https://wangyiyun-teal.vercel.app/playlist/track/all', {
    params: {
      id: id,
      limit: 50,
      offset: 1
    }
  })
}
