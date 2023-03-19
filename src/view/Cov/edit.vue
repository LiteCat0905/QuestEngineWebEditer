<script setup>
import { ArrowHookUpRight24Regular, CaretDown24Regular, ArrowHookUpLeft24Regular, CaretLeft24Regular } from '@vicons/fluent';
import { toyaml, tojson } from '../../utils/toyaml';
import { SendErrorMessage } from '../../utils/message';
import { ref } from 'vue';
import COPY from "../../components/copy.vue";
const code = ref("请复制你的配置文件到这里~\n(●'◡'●)")
const formValue = ref({
    "CovID": {
        "npcIDs": [
            "0"
        ],
        "condition": "",
        "speed": 2,
        "space": {
            "enable": true,
            "condition": "spaceRange 30 30 30 {{location}}\n"
        },
        "type": "chat",
        "template": "chat_common_animation",
        "dialog": [
            "",
            ""
        ],
        "replyChoose": "&7&l> &f",
        "replyDefault": "&f",
        "reply": [
            {
                "replyID": "reply1",
                "condition": "",
                "content": [
                    "第一句回复"
                ],
                "script": "dialog end\n"
            },
            {
                "replyID": "reply2",
                "condition": "",
                "content": [
                    "第二句回复"
                ],
                "script": "dialog select XXX dialog send\ndialog end\n"
            }
        ]
    }
});
function load() {
    code.value = toyaml(formValue.value)
}
function toleft() {
    try {
        formValue.value = tojson(code.value)
    } catch (error) {
        SendErrorMessage(error.message)
    }

}
</script>

<template >
    <n-space justify="center" size='small'>

        <n-card title="" size="huge" class="left">
            <n-space justify="space-between" size="large">
                <n-h1 prefix="bar" align-text type="info">
                    <n-text type="info">
                        编辑对话
                    </n-text>
                </n-h1>
                <n-button type="warning" size="medium" @click="load" dashed><template #icon>
                        <n-icon>
                            <ArrowHookUpRight24Regular />
                        </n-icon>
                    </template>向右同步</n-button>
            </n-space>
            <n-alert title="这是一条很重要的提示！" type="info">
                由于我的IQ十分的LOW所以不能一次生成一堆对话、对话唯一编号只能统一生成为「CovID」、也不支持悬浮对话。💔如果你能帮助我完成这部分代码欢迎pr
            </n-alert>
            <br>
            <n-space @change="load" vertical>
                <n-tag :bordered="false">
                    对话唯一编号<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template>
                </n-tag>
                <n-input value="CovID" disabled><template #prefix>
                    </template></n-input>
                <n-tag :bordered="false">NCPID<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-dynamic-input v-model:value="formValue.CovID.npcIDs" placeholder="NpcIDs" :min="0" />

                <n-tag :bordered="false">
                    对话条件(Kether)<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template>
                </n-tag>
                <n-input v-model:value="formValue.CovID.condition" type="textarea" placeholder="达成条件脚本" :autosize="{
                    minRows: 1
                }" />
                <n-tag :bordered="false">
                    文字展示速度<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template>
                </n-tag>
                <n-input-number v-model:value="formValue.CovID.speed" />
                <n-space justify="center">
                    <n-checkbox v-model:checked="formValue.CovID.space.enable" size="large" />
                    <n-tag type="info" size="medium">
                        是否启用对话空间<template #icon>
                            <n-icon>
                                <CaretLeft24Regular />
                            </n-icon>
                        </template></n-tag><n-tag type="info" size="medium">对话空间条件<template #icon><n-icon>
                                <CaretDown24Regular />
                            </n-icon></template></n-tag>
                </n-space>
                <n-input v-model:value="formValue.CovID.space.condition" type="textarea" placeholder="达成条件脚本" :autosize="{
                    minRows: 1
                }" />
                <n-tag :bordered="false">继承(Hook)<template #icon><n-icon>
                            <CaretDown24Regular />
                        </n-icon></template></n-tag>
                <n-input v-model:value="formValue.CovID.hook" placeholder="要继承的对话编号" />
                <n-tag :bordered="false">对话类型<template #icon><n-icon>
                            <CaretDown24Regular />
                        </n-icon></template></n-tag>
                <n-input v-model:value="formValue.CovID.type" placeholder="chat" disabled />
                <n-tag :bordered="false">回复选择默认前缀<template #icon><n-icon>
                            <CaretDown24Regular />
                        </n-icon></template></n-tag>
                <n-input v-model:value="formValue.CovID.replyChoose" placeholder=">" />
                <n-tag :bordered="false">回复不选择默认前缀<template #icon><n-icon>
                            <CaretDown24Regular />
                        </n-icon></template></n-tag>
                <n-input v-model:value="formValue.CovID.replyDefault" placeholder="" />
                <n-tag :bordered="false">对话模板<template #icon><n-icon>
                            <CaretDown24Regular />
                        </n-icon></template></n-tag>
                <n-input v-model:value="formValue.CovID.template" placeholder="" />
                <n-tag :bordered="false">对话内容(聊天框对话)<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-dynamic-input v-model:value="formValue.CovID.dialog" placeholder="对话内容" :min="0" />
                <n-tag :bordered="false">回复内容(聊天框对话)<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-dynamic-input v-model:value="formValue.CovID.reply">
                    <template #create-button-default>
                        添加一个回复
                    </template>
                    <template #default="{ value }">
                        <n-space vertical>
                            <n-tag type="info" :bordered="false">————这是一条超酷的分割线————</n-tag>
                            <n-input v-model:value="value.replyID"><template #prefix>
                                    当前对话回复项的唯一回复编号:
                                </template></n-input>
                            <n-tag :bordered="false">
                                回复条件<template #icon>
                                    <n-icon>
                                        <CaretDown24Regular />
                                    </n-icon>
                                </template>
                            </n-tag>
                            <n-input v-model:value="value.condition" type="textarea" placeholder="达成条件脚本" :autosize="{
                                minRows: 1
                            }" />
                            <n-dynamic-input v-model:value="value.content" placeholder="回复内容" :min="0" />
                            <n-input v-model:value="value.script" type="textarea" placeholder="回复结束脚本" :autosize="{
                                minRows: 3
                            }" />
                        </n-space>
                    </template>
                </n-dynamic-input>
            </n-space>
        </n-card>
        <n-space vertical>

            <n-card title="输出栏" size="medium" class="right">
                <n-space vertical>
                    <n-alert title="这是一条很重要的提示！" type="info">
                        由于我的IQ十分的LOW请⭐一个一个编辑对话⭐，并把⭐对话编号改为「CovID」⭐
                    </n-alert>
                    <n-button type="warning" size="medium" @click="toleft" dashed><template #icon>
                            <n-icon>
                                <ArrowHookUpLeft24Regular />
                            </n-icon>
                        </template>向左同步</n-button>
                    <COPY :copytext="code"></COPY>
                </n-space>
                <n-input v-model:value="code" type="textarea" placeholder="输出的东西~" :autosize="{
                    minRows: 3
                }" @change="toleft" />

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