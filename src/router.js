import {createRouter, createWebHistory} from 'vue-router';
import StudentComponent from './components/StudentComponent.vue'
import StudentDetail from './components/StudentDetail.vue'

const myRoutes = [ 
    { 
        path: "/", name: "Home", component: StudentComponent,
    },
    {
        path: "/detail/:id", name: "StudentsDetails", component: StudentDetail, props: true
    }
]
const router = createRouter({history: createWebHistory(), routes: myRoutes})

export default router