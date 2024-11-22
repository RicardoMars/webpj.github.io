import { createRouter,createWebHistory } from "vue-router"
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
    history:createWebHistory(),
    routes
})

export default router;