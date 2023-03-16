<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import axios from 'axios';
import router from '../router';
import { useMessage } from 'naive-ui';
var baseurl = import.meta.env.VITE_V1_API
const message = useMessage();
const load = async () => {
    var url_loginout = baseurl + "/api/login_out"
    var body_json = JSON.stringify({
        "id": sessionStorage.getItem("id"),
        "token": sessionStorage.getItem("token")
    });
    var customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        let loginout = await axios.post(url_loginout, body_json, customConfig)
        if (loginout.data.code == 200) {
            var message_ = loginout.data.msg
            message.success(message_)
            sessionStorage.clear()
            router.push("/auth/login")
        }
        else {
            var message__ = loginout.data.msg
            message.warning(message__)
        }
    } catch (error) {
        console.error(error.code)
        message.error(error.code)
    }
}

</script>
<template>
    <n-card title="" size="large" class="card">
        <n-result status="403" title="你先别急" description="点下面按钮退出登录">
            <template #footer>
                <n-button @click="load">退出登录</n-button>
            </template>
        </n-result>
    </n-card>
</template>


<style scoped>
.card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    max-width: 700px;
    max-height: 500px;
}
</style>
