/*
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:06
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-11-22 17:51:54
 */
import { createRouter,createWebHashHistory } from "vue-router"
import homePage from "../components/indexPage.vue"
import testPage1 from "../components/testPage.vue"

const routes = [
    {
        path: '/',
        name: 'homePage',
        component:homePage
    },
    {
        path: '/testPage',
        name: 'testPage',
        component:testPage1
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;