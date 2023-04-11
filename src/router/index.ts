import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'

import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/about",
        name: "关于页面",
        component: () => import("@/views/About.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;