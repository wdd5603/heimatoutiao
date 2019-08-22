import aside from '../components/home/aside'
import header from '../components/home/header'
import breadCrumb from '../components/bread-crumb/bread-crumb'

export default {
  install (Vue) {
    Vue.component('aside-view', aside)
    Vue.component('header-view', header)
    Vue.component('bread-crum', breadCrumb)
  }

}
