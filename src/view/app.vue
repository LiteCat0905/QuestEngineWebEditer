<script setup>
import router from '../router';
import { ref } from 'vue';
import { useMessage } from 'naive-ui'
import PostList from '../components/postlist.vue'
import GetPosts from '../composibles/getPosts'
import axios from 'axios';
var baseurl = import.meta.env.VITE_V1_API
const message = useMessage()
const msgReactive = message.create("正在加载中···", {
    type: "loading",
    duration: 1e4
});
const load = async () => {
    var url = baseurl + "/api/usrdata"
    try {
        var body_json = JSON.stringify({
            "token": sessionStorage.getItem("token")
        });
        var customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let data = await axios.post(url, body_json, customConfig)
        if (data.data.code == 200) {
            name.value = data.data.name
            mcid.value = data.data.mcid
            uid.value = data.data.uid
            sessionStorage.setItem("id", data.data.name);
            sessionStorage.setItem("mcid", data.data.mcid);
            sessionStorage.setItem("uid", data.data.uid);
            loaded.value = false
            msgReactive.type = "success"
            msgReactive.content = "加载完成"
            msgReactive.closable = true

        }
        else {
            var message__ = data.data.msg
            message.warning(message__)
            sessionStorage.clear()
            router.push("/app")
        }
    } catch (error) {
        console.error(error.code)
        message.error(error.code)
    }
}
load();



const loaded = ref(true)
const name = ref("")
const mcid = ref("")
const uid = ref("")
const { posts, load_ } = GetPosts()
load_()
</script>

<template>
    <n-space justify="center" size='small'>

        <n-card title="用户信息" size="medium" class="left">
            <n-skeleton v-if="loaded" text :repeat="6" />
            <template v-else>
                <n-grid x-gap="12" :cols="3">
                    <n-grid-item>
                        <n-statistic label="用户名" :value="name"></n-statistic>
                    </n-grid-item>
                    <n-grid-item>
                        <n-statistic label="MCID" :value="mcid"></n-statistic>
                    </n-grid-item>
                    <n-grid-item>
                        <n-statistic label="UID" :value="uid"></n-statistic>
                    </n-grid-item>
                </n-grid>
                <br>
                <router-link to="/app/bind/mcid">
                    <n-alert v-if="mcid == 'None'" title="哇！你还有没绑定游戏ID" type="info">
                        点这里去绑定吧！
                    </n-alert>
                </router-link>
            </template>
        </n-card>

        <n-card title="公告栏" size="medium" class="right notice">
            <n-skeleton v-if="loaded" text :repeat="6" />
            <template v-else>
                <PostList :post="posts" />
            </template>
        </n-card>

    </n-space>
</template>



<style scoped>
.center {
    margin-left: auto;
}

.left {
    height: auto;
    width: 700px;
    margin: 20px;
    margin-top: 50px;
}

.notice {
    font-size: 200px;
}

.right {
    height: auto;
    width: 300px;
    margin: 20px;
    margin-top: 50px;
}
</style>