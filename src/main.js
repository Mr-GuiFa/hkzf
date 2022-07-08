import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.less'
import Vant from './plugins/index'
import './iconfont/iconfont.css'
import './styles/theme.less'
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
