<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <n-card title="" size="medium" class="card">
        <n-result status="418" title="你先别急" description="因为你没登陆">
            <template #footer>
                <router-link to="/login">
                    <n-button>前往登录</n-button></router-link>
            </template>
        </n-result>
    </n-card>
</template>
<script setup>
// import { onCreated } from 'vue';
import router from '../router';
import { useMessage } from 'naive-ui'
const message = useMessage()
if (sessionStorage.getItem("token") == null) {
    message.info("前往登录")
    router.push("/auth/login")
}else{
    router.push("/app")
}



</script>
<style scoped>
.card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    max-width: 700px;
    max-height: 500px;
}
</style>
