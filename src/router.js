import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './components/Main.vue'
import About from './components/About.vue'
import Detail from './components/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router