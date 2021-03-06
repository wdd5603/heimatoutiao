import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'
import Home from './views/home/home'
import Main from './components/home/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '', component: Main },
        { path: 'commentlist', component: () => import('./views/comment/comment') },
        { path: 'contentlist', component: () => import('./views/article/article') },
        { path: 'contlistedit/:itemid', component: () => import('./views/article/editArticle') },
        { path: 'publish', component: () => import('./views/article/publish') }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
