<script setup>
import { ref } from 'vue';
import COPY from "../components/copy.vue"; 

var code = "不是你都没编辑呢。"

</script>

<template>
    <n-space justify="center" size='small'>

        <n-card title="" size="huge" class="left">
            <n-h1 prefix="" align-text type="info">
                <n-text type="info">
                    Hi！今天做点什么？
                </n-text>
            </n-h1>
            <n-space justify="space-around" size='large'>
                <router-link to="/quest/add">
                    <n-card title="" size="medium" embedded :bordered="true">
                        <n-h4 prefix=""><n-text type="success">🧾你没事吗？</n-text></n-h4>
                        <n-button type="info" dashed>
                            创建新的任务
                        </n-button>
                    </n-card>
                </router-link>
                <!-- <router-link to="/cov/add"> -->
                    <n-card title="" size="large" embedded :bordered="true">
                        <n-h4 prefix=""><n-text type="success">🗣请打开麦克风交流</n-text></n-h4>
                        <n-button type="warning" dashed>
                            创建新的对话
                        </n-button>
                        <n-h6>还没写写完呐~</n-h6>
                    </n-card>
                <!-- </router-link> -->
            </n-space>
        </n-card>
        <n-space vertical>
            <n-card title="输出栏" size="medium" class="right">
                <COPY :copytext="code"></COPY>
                <n-code :code="code" language="yaml" show-line-numbers />
            </n-card>
            <n-card title="谢谢我自己" size="medium" class="right">
                <iframe src="https://afdian.net/leaflet?slug=litecat" width="290" scrolling="no" height="200"
                    frameborder="0"></iframe>
            </n-card>
        </n-space>
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


.right {
    height: auto;
    margin: 20px;
    margin-top: 50px;
}
</style>