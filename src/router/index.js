import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductsCards from '@/components/ProductsCards.vue'

const routes = [

  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/products',
    name: 'productscards',
    component: ProductsCards
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router