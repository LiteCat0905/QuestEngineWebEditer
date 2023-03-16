<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import axios from 'axios';
import router from '../router';
import { useMessage } from 'naive-ui';
var baseurl = import.meta.env.VITE_V1_API
const id_ = ref("");
const password_ = ref("")
const message = useMessage();
const load = async () => {
    var url = baseurl + "/api/login"
    try {
        var body_json = JSON.stringify({
            "id": id_.value,
            "password": password_.value
        });
        var customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let data = await axios.post(url, body_json, customConfig)
        if (data.data.code == 200) {
            var message_ = data.data.msg
            message.success(message_)
            sessionStorage.setItem("token", data.data.token);
            router.push("/app")
        }
        else {
            var message__ = data.data.msg
            message.warning(message__)
        }
    } catch (error) {
        console.error(error.code)
        message.error(error.code)
    }
}
</script>
<template>
    <n-space justify="center" class="container">
        <n-card title="登录 / LOGIN" size="large" class="card">

            <n-auto-complete v-model:value="id_" placeholder="邮箱/用户名" size="large" />
            <n-input type="password" show-password-on="mousedown" placeholder="密码" v-model:value="password_"
                size="large" :maxlength="16" />
            <n-hr></n-hr>
            <n-button-group>
                <n-button size="large" @click="load" secondary>登录</n-button>
                <router-link to="/auth/register">
                    <n-button type="info" size="large" secondary>注册</n-button>
                </router-link>

            </n-button-group>

        </n-card>
    </n-space>
</template> 
<style scoped>
.card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}
</style>
