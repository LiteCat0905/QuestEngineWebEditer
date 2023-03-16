import { createRouter, createWebHistory } from 'vue-router'
const routes = [

    { //AUTH
        path: '/',
        name: 'Main',
        component: () => import('../view/notoken.vue')
    },
    { //AUTH
        path: '/auth/login',
        name: 'Login',
        component: () => import('../view/login.vue')
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('../view/register.vue')
    },
    {
        path: '/auth/loginout',
        name: 'LoginOut',
        component: () => import('../view/loginout.vue')
    },
    {// APP
        path: '/app',
        name: 'App',
        component: () => import('../view/app.vue')
    },
    {
        path: '/app/bind/mcid',
        name: 'BindMCID',
        component: () => import('../view/bindmcid.vue')
    },

]



const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        next()
    }
    else {
        if (sessionStorage.getItem("token")) {
            if (to.name == "Login" || to.name == "Register"){
                next("/app")
            }else{
                next()
            }
        } else {
            if (to.name == "Login" || to.name == "Register"){
                next()
            }else{
                next('/auth/login')
            }
            
        }
    }
})


export default router