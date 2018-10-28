import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  base: '/',
  routes: [
    {
      path: '*',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "seach" */ './views/Search.vue')
    }
  ]
})
