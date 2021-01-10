import { createRouter, createWebHashHistory } from 'vue-router'
import Work from '../views/Work.vue'

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contract',
    name: 'Contract',
    component: () => import('../views/Contract.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
