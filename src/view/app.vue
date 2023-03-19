<script setup>
import { ref } from 'vue';
import COPY from "../components/copy.vue";

var code = "不是你都没编辑呢。\n¯\\_(ツ)_/¯"

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
                        <n-button type="warning" dashed>
                            创建新任务
                        </n-button>
                    </n-card>
                </router-link>
                <router-link to="/cov/add">
                    <n-card title="" size="large" embedded :bordered="true">
                        <n-h4 prefix=""><n-text type="success">🗣没事说说话</n-text></n-h4>
                        <n-button type="warning" dashed>
                            创建新对话
                        </n-button><br><br>
                        <a href="https://github.com/LiteCat0905/QuestEngineWebEditor" target="_blank"><n-tag type="info" size="medium">功能不全</n-tag><n-tag type="info" size="medium">欢迎PR</n-tag><n-tag type="warning" size="medium">右上角Github仓库</n-tag></a>
                        
                    </n-card>
                </router-link>
                <router-link to="/quest/edit">
                    <n-card title="" size="large" embedded :bordered="true">
                        <n-h4 prefix=""><n-text type="success">🧾你不改改吗？</n-text></n-h4>
                        <n-button type="warning" dashed>
                            编辑任务
                        </n-button>
                    </n-card>
                </router-link>
                <router-link to="/cov/edit">
                    <n-card title="" size="large" embedded :bordered="true">
                        <n-h4 prefix=""><n-text type="success">🗣请打开麦克风交流</n-text></n-h4>
                        <n-button type="warning" dashed>
                            编辑对话
                        </n-button><br><br>
                        <a href="https://github.com/LiteCat0905/QuestEngineWebEditor" target="_blank"><n-tag type="info" size="medium">功能不全</n-tag><n-tag type="info" size="medium">欢迎PR</n-tag><n-tag type="warning" size="medium">右上角Github仓库</n-tag></a>
                        
                    </n-card>
                </router-link>
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