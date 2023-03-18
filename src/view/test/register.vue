<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import axios from 'axios';
import router from '../router';
import { useMessage } from 'naive-ui';
import { ReturnDownBack } from '@vicons/ionicons5'
var baseurl = import.meta.env.VITE_V1_API
const id_ = ref("");
const mail_ = ref("")
const password_ = ref("")
const message = useMessage();
const load = async () => {
    var url = baseurl + "/api/register"
    try {
        var body_json = JSON.stringify({
            "id": id_.value,
            "password": password_.value,
            "mail": mail_.value
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
// 用户名
// 用户密码
// 用户邮箱
</script>
<template>
    <n-space justify="center" class="container">
        <n-card title="注册 / REGISTER" size="large" class="card">
            <div class="form">
                <n-auto-complete v-model:value="id_" placeholder="用户名" size="large" />
                <n-auto-complete v-model:value="mail_" placeholder="邮箱" size="large" />
                <n-input type="password" show-password-on="mousedown" placeholder="密码" v-model:value="password_"
                    size="large" :maxlength="16" />
            </div>
            <n-hr></n-hr>
            <n-button-group>
                <n-button size="large" type="info" secondary @click="load">注册</n-button><br>
                <router-link to="/auth/login">
                    <n-button type="default" size="large">
                        <template #icon>
                            <n-icon :component="ReturnDownBack"></n-icon>
                        </template>
                        返回登录
                    </n-button></router-link>
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

.form {
    max-width: 400px;
}
</style>
