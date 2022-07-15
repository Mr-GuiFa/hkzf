import request from '@/utils/request'
export const getList = () => {
  return request({
    method: 'GET',
    url: 'http://liufusong.top:8080/user/houses'
  })
}

export const getFavorites = () => {
  return request({
    method: 'GET',
    url: 'http://liufusong.top:8080/user/favorites'
  })
}

export const getCityList = () => {
  return request({
    method: 'GET',
    url: 'http://liufusong.top:8080/area/city?level=1'
  })
}
