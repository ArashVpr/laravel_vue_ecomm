import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import ResetPassword from '../views/ResetPassword.vue'
import RequestResetPassword from '../views/RequestResetPassword.vue'
import AppLayout from '../components/AppLayout.vue'
import store from '../store'

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestResetPassword
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFoundPage
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
  })

router.beforeEach((to, from, next) => {

if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'login' })
} else if (!to.meta.requiresAuth && store.state.user.token) {
    next({ name: 'app.dashboard' })
}
else {
    next()
}

})


export default router

