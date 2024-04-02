import HomePage from "@/views/home/HomePage.vue";
import Document from "@/views/home/Document.vue";
import Login from "@/views/login/Login.vue";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/document',
        name: 'document',
        component: Document
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

export default routes