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
    {// QUEST/EDIT
        path: '/quest/edit',
        name: 'EditQuest',
        component: () => import('../view/Quest/edit.vue'),
        meta: {
            title: "编辑任务"
        }
    },
    {// COV/ADD
        path: '/cov/add',
        name: 'AddCov',
        component: () => import('../view/Cov/add.vue'),
        meta: {
            title: "创建对话"
        }
    },
    {// COV/EDIT
        path: '/cov/edit',
        name: 'EditCov',
        component: () => import('../view/Cov/edit.vue'),
        meta: {
            title: "编辑对话"
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