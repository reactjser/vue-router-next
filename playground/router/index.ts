import { createRouter, createWebHashHistory } from '../../src'

// 1. 定义路由组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// 2. 定义路由配置，每个路径映射一个路由视图组件
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

// 3. 创建路由实例，可以指定路由模式，传入路由配置对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
