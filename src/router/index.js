import { createRouter, createWebHistory } from 'vue-router'
import { StartLoadingBar, FinishLoadingBar } from "../utils/loadingbar.js";
const routes = [

    {// HOME
        path: '/',
        name: 'App',
        component: () => import('../view/app.vue'),
        meta: {
            title: "主页"
        }
    },
    {// QUEST/ADD
        path: '/quest/add',
        name: 'NewQuest',
        component: () => import('../view/Quest/add.vue'),
        meta: {
            title: "创建任务"
        }
    },

]



const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    StartLoadingBar();
    next();
})

router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title + " | QEWE"
    }
    FinishLoadingBar();
})

export default router