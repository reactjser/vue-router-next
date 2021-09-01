// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 4. 创建 app 实例
const app = createApp(App)

// 5. 在挂载页面 之前先安装路由
app.use(router)

// 6. 挂载页面
app.mount('#app')
