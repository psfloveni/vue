import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../view/About.vue'
import Home from '../view/Home.vue'
import News from '../view/News.vue'
import Message from '../view/Message.vue'
import MessageDetal from '../view/MessageDetal.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/home/news',
          component: News
        },
        {
          path: '/home/message',
          component: Message,
          children: [
            {
              path: '/home/message/messageDetal/:id',
              component: MessageDetal,
              name: 'messageDetal'
            }
          ]
        },
        {
          path: '/',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    },
  ]
})