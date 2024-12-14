/*
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:06
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-13 17:01:11
 */
import { createRouter,createWebHashHistory} from "vue-router"
import homePage from "../components/indexPage.vue"
import solutionPage from "../components/solutionsPage.vue"
import casePage from "../components/casePage.vue"
import partPage from "../components/partPage.vue"
import aboutusPage from "../components/aboutusPage.vue"
import contactusPage from "../components/contactusPage.vue"
import qualifyPage from "../components/qualifyPage.vue"
import responsePage from "../components/responsePage.vue"

const routes = [
    {
        path: '/',
        name: 'homePage',
        component:homePage
    },
    {
        path: '/solution',
        name: 'solutionPage',
        component: solutionPage
    },
    {
        path: '/case',
        name: 'casePage',
        component: casePage
    },
    {
        path: '/part',
        name: 'partPage',
        component: partPage
    },
    {
        path: '/aboutus',
        name: 'aboutusPage',
        component: aboutusPage
    },
    {
        path: '/contactus',
        name: 'contactusPage',
        component: contactusPage
    },
    {
        path: '/qualify',
        name: 'qualifyPage',
        component: qualifyPage
    },
    {
        path: '/response',
        name: 'responsePage',
        component: responsePage
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;