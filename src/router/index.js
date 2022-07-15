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
  },
  {
    path: '/rent',
    component: () => import('@/views/profile/component/rent.vue')
  },
  {
    path: '/favorate',
    component: () => import('@/views/profile/component/favorate.vue')
  },
  {
    path: '/city',
    component: () => import('@/views/home/components/city.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
