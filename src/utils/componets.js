import aside from '../components/home/aside'
import header from '../components/home/header'

export default {
  install (Vue) {
    Vue.component('aside-view', aside)
    Vue.component('header-view', header)
  }

}
