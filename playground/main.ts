// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
