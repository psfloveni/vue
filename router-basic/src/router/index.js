import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../view/About.vue'
import Home from '../view/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 多个配置项
  routes: [
    { // 一般路由
      path: '/about',
      component: About
    },
    { // 一般路由
      path: '/home',
      component: Home
    },
    { // 自动跳转路由
      path: '/',
      redirect: '/about'
    }
  ]
})