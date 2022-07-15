import request from '@/utils/request'
// import store from '@/store'
export const login = (data) => {
  return request({
    method: 'POST',
    url: 'http://liufusong.top:8080/user/login',
    data
  })
}
export const getUser = () => {
  return request({
    method: 'GET',
    url: '/user'
    // headers: {
    //   // 注意：该接口需要授权才能访问
    //   //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}
