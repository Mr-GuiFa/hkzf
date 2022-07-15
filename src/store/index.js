import Vue from 'vue'
import Vuex from 'vuex'
import { getLocal, setLocal } from '@/utils/storage'
Vue.use(Vuex)
const token = 'token'
export default new Vuex.Store({
  state: {
    user: getLocal(token)
  },
  getters: {},
  mutations: {
    setUser (state, user) {
      // 接受了参数
      console.log(token, user)
      state.user = user
      // 本地存储 直接传递数据到storage检测
      setLocal(token, user)
    }
  },
  // 异步状态修改
  actions: {},
  modules: {}
})
