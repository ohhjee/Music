import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import store from '../store'
import Home from '../view/Home.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router