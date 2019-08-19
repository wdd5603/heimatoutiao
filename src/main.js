import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUi from 'element-ui'
import './styles/index.less' // 引文重置的基础样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
