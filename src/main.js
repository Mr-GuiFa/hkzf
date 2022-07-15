import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.less'
import Vant from './plugins/index'
import './iconfont/iconfont.css'
import '@/styles/theme.less'
import store from './store'
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
