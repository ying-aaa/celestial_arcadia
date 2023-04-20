import {
    RouteRecordRaw
} from 'vue-router'
const Home = () => import("@/views/home/Home.vue");
const Find = () => import("@/views/find/Find.vue");


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: "",
                name: '发现音乐',
                component: () => import("@/views/find/Find.vue")
            }
        ]
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("@/views/login/LoginBox.vue")
    }
]
export default routes;