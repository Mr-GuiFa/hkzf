import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/layout',
    component: () => import('@/views/layout'),
    children: [{

      path: '/home',
      component: () => import('@/views/home')
    }, {
      path: '/home/list',
      component: () => import('@/views/list')
    }, {
      path: '/home/news',
      component: () => import('@/views/news')
    }, {
      path: '/home/profile',
      component: () => import('@/views/profile')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
