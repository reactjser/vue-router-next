import { createRouter, createWebHashHistory } from '../../src'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const history = createWebHashHistory()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history,
  routes,
})

export default router
