import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUi from 'element-ui'
import './styles/index.less' // 引文重置的基础样式
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios' // 引入axios
import Component from './utils/componets' // 引入组件js

// 优化url根域名
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

Vue.prototype.$axios = axios
Vue.use(elementUi)
Vue.use(Component)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
