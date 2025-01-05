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
import caseOne from "../components/caseOne.vue"
import caseTwo from "../components/caseTwo.vue"
import caseThird from "../components/caseThird.vue"
import caseFour from "../components/caseFour.vue"
import solutionPage_2 from "../components/solutionsPage_2.vue"
import businessPage1 from "../components/business/businessPage1.vue"
import businessPage2 from "../components/business/businessPage2.vue"
import businessPage3 from "../components/business/businessPage3.vue"

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
        path: '/solution_2',
        name: 'solutionPage_2',
        component: solutionPage_2
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
    },
    {
        path: '/caseOne',
        name: 'caseOne',
        component: caseOne
    },
    {
        path: '/caseTwo',
        name: 'caseTwo',
        component: caseTwo
    },
    {
        path: '/caseThird',
        name: 'caseThird',
        component: caseThird
    },
    {
        path: '/caseFour',
        name: 'caseFour',
        component: caseFour
    },
    {
        path: '/businessPage1',
        name: 'businessPage1',
        component: businessPage1
    },
    {
        path: '/businessPage2',
        name: 'businessPage2',
        component: businessPage2
    },
    {
        path: '/businessPage3',
        name: 'businessPage3',
        component: businessPage3
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;