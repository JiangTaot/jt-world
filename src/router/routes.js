import HomePage from "@/views/home/HomePage.vue";
import Document from "@/views/home/Document.vue";

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
    }
]

export default routes