/*
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:22:51
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-11-21 15:41:35
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/router'
import './assets/global.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)


app.mount('#app')
