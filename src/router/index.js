import { createRouter, createWebHashHistory } from 'vue-router'
import Work from '../views/Work.vue'

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/interest',
    name: 'Interest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Interest.vue')
  },
  {
    path: '/who-am-i',
    name: 'WhoAmI',
    component: () => import('../views/WhoAmI.vue')
  },
  {
    path: '/business-gallery',
    name: 'Business',
    component: () => import('../components/gallery/Business.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
