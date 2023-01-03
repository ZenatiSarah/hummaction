import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path: '/inventaire',
    name: 'inventaire',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inventaire.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
