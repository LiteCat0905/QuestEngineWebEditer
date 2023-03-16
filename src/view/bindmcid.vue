<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import axios from 'axios';
import router from '../router';
import { useMessage } from 'naive-ui';
import { ReturnDownBack } from '@vicons/ionicons5'
var baseurl = import.meta.env.VITE_V1_API
const message = useMessage();
const load = async () => {
    var url = baseurl + "/api/bindmcid"
    try {
        var body_json = JSON.stringify({
            "mcid": MCID_.value,
            "token": sessionStorage.getItem("token")
        });
        var customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let data = await axios.post(url, body_json, customConfig)
        if (data.data.code == 200) {
            message.success(data.data.msg)
            sessionStorage.setItem("mcid",data.data.mcid)
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
function bind() {
    show.value = false
    load()

}
const show = ref(false)
const id_ = ref("");
const MCID_ = ref("");
// 用户名
// 用户密码
// 用户邮箱
id_.value = sessionStorage.getItem("id")
</script>
<template>
    <n-space justify="center" class="container">
        <n-card title="绑定MCID" size="large" class="card">
            <div class="form">
                <n-auto-complete v-model:value="id_" placeholder="id_" size="large" disabled />

                <n-input placeholder="输入你的MCID" v-model:value="MCID_" size="large" :maxlength="16" />

            </div>
            <n-hr></n-hr>
            <n-button-group>
                <n-popconfirm v-model:show="show">
                    <template #trigger>
                        <n-button size="large" type="info" secondary>确认绑定</n-button>
                    </template>
                    这个东西绑定后无法修改，请确认<br>(1) 大小写<br>(2) 有无空格
                    <template #action>
                        <n-button size="small" @click="bind" type="error" dashed>
                            确认
                        </n-button>
                    </template>
                </n-popconfirm>
                <br>
                <router-link to="/app">
                    <n-button type="default" size="large">
                        <template #icon>
                            <n-icon :component="ReturnDownBack"></n-icon>
                        </template>
                        返回面板
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
