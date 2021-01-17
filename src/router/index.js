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
  },
  {
    path: '/coding-gallery',
    name: 'Coding',
    component: () => import('../components/gallery/Coding.vue')
  },
  {
    path: '/psychology-gallery',
    name: 'Psychology',
    component: () => import('../components/gallery/Psychology.vue')
  },
  {
    path: '/game-design-gallery',
    name: 'GameDesign',
    component: () => import('../components/gallery/GameDesign.vue')
  },
  {
    path: '/game-esport-gallery',
    name: 'GameEsport',
    component: () => import('../components/gallery/GameEsport.vue')
  },
  {
    path: '/graphic-design-gallery',
    name: 'GraphicDesign',
    component: () => import('../components/gallery/GraphicDesign.vue')
  },
  {
    path: '/writing-gallery',
    name: 'Writing',
    component: () => import('../components/gallery/Writing.vue')
  },
  {
    path: '/music-gallery',
    name: 'Music',
    component: () => import('../components/gallery/Music.vue')
  },
  {
    path: '/data-science-gallery',
    name: 'DataScience',
    component: () => import('../components/gallery/DataScience.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
