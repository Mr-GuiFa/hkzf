import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080/'
})
request.interceptors.request.use(
  (config) => {
    // config >>当前的配置项
    // 判断token是否存在
    console.log(store.state?.user?.token)
    const token = store.state?.user?.token
    // const token = store.state.user && store.state.user.token;
    // 判断token是否存在
    if (token) {
      config.headers.authorization = `${token}`
    }
    // 配置完return >>config配置项
    return config
  },
  (err) => {
    // 为了报错
    return Promise.reject(err)
  }
)
request.interceptors.response.use()
export default request
