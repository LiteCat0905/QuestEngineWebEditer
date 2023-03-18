<script setup>
import { ApprovalsApp24Regular, CaretDown24Regular, CaretUp24Regular, CaretLeft24Regular } from '@vicons/fluent';
import { toyaml } from '../../utils/toyaml';
import { ref } from 'vue';
import COPY from "../../components/copy.vue";
function Modules_Create() {
    return {
        "select": "SELF",
        "id": 1,
        "type": 'ACCEPT',
        "script": "这里写脚本"
    }
}
function Trigger_Create() {
    return { 
        "id": "a",
        "type": "TRACK 追踪任务时触发",
        "select": 'SELF 触发的控制脚本仅对任务接受者执行',
        "script": "这里写脚本"
    }
}
function Target_Create() {
    return {
        "id": "a",
        "event": "break block",
        "node": "{{<block>\n[STONE]\n[CHEST]}}\n{{<amount>[3]}}\n",
        "description": [
            "打破石头或箱子{{target schedule}}/3"
        ],
        "data": [
            "ICON:PAPER"
        ],
        "trigger": []
    }
}
const code = ref("你还没生成东西呐！")
const target_event = ref([
    {
        label: "TASK 定时器",
        value: "task X",
    },
    {
        label: "破坏方块",
        value: "break block",
    },
    {
        label: "放置方块",
        value: "place block",
    },
    {
        label: "左键 Citizens NPC",
        value: "left npc",
    },
    {
        label: "右键 Citizens NPC",
        value: "right npc",
    },
    {
        label: "左键 Adyeshach NPC",
        value: "left ady",
    },
    {
        label: "右键 Adyeshach NPC",
        value: "right ady",
    },
    {
        label: "玩家死亡",
        value: "player death",
    },
    {
        label: "进入服务器",
        value: "player join server",
    },
    {
        label: "退出服务器",
        value: "player quit server",
    },
    {
        label: "玩家聊天",
        value: "player chat",
    },
    {
        label: "玩家击杀实体",
        value: "player kill entity",
    },
    {
        label: "玩家发送命令",
        value: "player send command",
    },
    {
        label: "附魔物品",
        value: "enchant item",
    }
])
const time_options = ref([
    {
        label: "ALWAYS 不限时",
        value: "ALWAYS",
    },
    {
        label: "DAY 每日",
        value: "DAY",
    },
    {
        label: "WEEKLY 每周",
        value: "WEEKLY",
    },
    {
        label: "MONTHLY 每月",
        value: "MONTHLY",
    },
    {
        label: "YEARLY 每年",
        value: "YEARLY",
    },
    {
        label: "CUSTOM 自定义限时",
        value: "CUSTOM",
    },

])
const mode_options = ref([
    {
        label: "PERSONAL 单人",
        value: "PERSONAL",
    },
    {
        label: "COLLABORATION 协作(组队任务)",
        value: "COLLABORATION",
    }
])
const control_select = ref([
    {
        label: "SELF 触发的控制脚本仅对任务接受者执行",
        value: "SELF",
    },
    {
        label: "TEAM 触发的控制脚本对队伍执行",
        value: "TEAM",
    },
    {
        label: "ALL 触发的控制脚本对在线所有玩家执行",
        value: "ALL",
    }
])
const control_type = ref([
    {
        label: "ACCEPT 接受任务时触发",
        value: "ACCEPT",
    },
    {
        label: "FINISH 任务完成时触发",
        value: "FINISH",
    },
    {
        label: "FAIL 任务失败时触发",
        value: "FAIL",
    },
    {
        label: "QUIT 放弃任务时触发",
        value: "QUIT",
    },
    {
        label: "RESET 重置任务时触发",
        value: "RESET",
    },
    {
        label: "TRACK 追踪任务时触发",
        value: "TRACK",
    }
])
const formValue = ref({
    "quest": {
        "id": "",
        "name": "",
        "data": [
            "ICON:BOOK"
        ],
        "note": [
            "",
            "",
            "&8剩余时间: {{quest limitTime}}"
        ],
        "accept": {
            "auto": false,
            "condition": ""
        },
        "time": {
            "type": "WEEKLY",
            "duration": "2,00:00:00>2,23:59:59",
            "reset": true
        },
        "mode": {
            "type": "PERSONAL",
            "amount": -1,
            "shareData": true
        },
        "control": [
            {
                "select": "SELF",
                "id": "2",
                "type": "FINISH",
                "script": "subtitle color \"&a第一篇完成\"\nwaitTime 3s\nsubtitle color \"即将开始下一篇任务\"\nwaitTime 2s\nquest accept quest2\n"
            },
            {
                "select": "SELF",
                "id": "1",
                "type": "ACCEPT",
                "script": "subtitle color \"&c稻草人: ...\"\nwaitTime 2s\nsubtitle color \"&c稻草人: ...\"\nwaitTime 2s\nsubtitle 它似乎有些破损\nwaitTime 3s\ntitle color \"&a接受任务\"\nsubtitle color \"&f耕田之下的稻草人\"\n"
            }
        ],
        "target": [
            {
                "id": "a",
                "event": "break block",
                "node": "{{<block>\n[STONE]\n[CHEST]}}\n{{<amount>[3]}}\n",
                "description": [
                    "打破石头或箱子{{target schedule}}/3"
                ],
                "data": [
                    "ICON:PAPER"
                ],
                "trigger": [
                    {
                        "id": "a",
                        "type": "TRACK",
                        "select": "SELF",
                        "script": "tell 请完成任务：打破石头或箱子3个\n"
                    },
                    {
                        "id": "b",
                        "type": "FINISH",
                        "select": "SELF",
                        "script": "tell 完成目标啦\n"
                    }
                ]
            }
        ]
    }
});
function load() {
    code.value = toyaml(formValue.value)
}
</script>

<template >
    <n-space justify="center" size='small'>

        <n-card title="" size="huge" class="left">
            <n-space justify="space-between" size="large">
                <n-h1 prefix="bar" align-text type="info">
                    <n-text type="info">
                        创建任务
                    </n-text>
                </n-h1>
                <n-button type="warning" size="medium" @click="load" dashed><template #icon>
                        <n-icon>
                            <ApprovalsApp24Regular />
                        </n-icon>
                    </template>刷新配置</n-button>
            </n-space>

            <n-space @change="load" vertical>
                <n-tag :bordered="false">
                    任务编号<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template>
                </n-tag>
                <n-input v-model:value="formValue.quest.id" />
                <n-tag :bordered="false">
                    任务名称<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template>
                </n-tag>
                <n-input v-model:value="formValue.quest.name" />
                <!-- <n-dynamic-input v-model:value="formValue.quest.data" placeholder="请输入" :min="1" :max="1" /> -->
                <n-tag :bordered="false">数据外接口<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-dynamic-input v-model:value="formValue.quest.data" placeholder="请输入" :min="1" :max="1" />
                <n-tag :bordered="false">笔记<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-dynamic-input v-model:value="formValue.quest.note" placeholder="请输入笔记" :min="0" />
                <n-tag :bordered="false">自动接受任务<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-space justify="center">
                    <n-checkbox v-model:checked="formValue.quest.accept.auto" />
                    <n-tag type="info" size="medium">
                        是否自动接收任务<template #icon>
                            <n-icon>
                                <CaretLeft24Regular />
                            </n-icon>
                        </template></n-tag><n-tag type="info" size="medium">自动接收任务条件<template #icon><n-icon>
                                <CaretDown24Regular />
                            </n-icon></template></n-tag>
                </n-space>
                <n-input v-model:value="formValue.quest.accept.condition" placeholder="自动接收条件" />
                <n-tag :bordered="false">时间类型<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-select v-model:value="formValue.quest.time.type" :options="time_options" />
                <n-tag :bordered="false">时间类型<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-input v-model:value="formValue.quest.time.duration" placeholder="时间段" />
                <n-space justify="center">
                    <n-checkbox v-model:checked="formValue.quest.time.reset" />
                    <n-tag type="info" size="medium">
                        时间任务重置<template #icon>
                            <n-icon>
                                <CaretLeft24Regular />
                            </n-icon>
                        </template></n-tag>
                </n-space>
                <n-tag :bordered="false">任务模式<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-select v-model:value="formValue.quest.mode.type" :options="mode_options" />
                <n-tag :bordered="false">协同人数<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-input-number v-model:value="formValue.quest.mode.amount" placeholder="协同人数" :min="-1" />
                <n-space justify="center">
                    <n-checkbox v-model:checked="formValue.quest.mode.shareData" />
                    <n-tag type="info" size="medium">
                        协同模式下是否共享当前任务数据<template #icon>
                            <n-icon>
                                <CaretLeft24Regular />
                            </n-icon>
                        </template></n-tag>
                </n-space>
                <n-tag :bordered="false">控制模块<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-dynamic-input v-model:value="formValue.quest.control" :on-create="Modules_Create">
                    <template #create-button-default>
                        添加一个控制模块
                    </template>
                    <template #default="{ value }">
                        <n-space vertical>
                            <n-select v-model:value="value.select" :options="control_select" />
                            <n-input-number v-model:value="value.id"><template #prefix>
                                    唯一控制编号：
                                </template></n-input-number>
                            <n-select v-model:value="value.type" :options="control_type" />
                            <n-input v-model:value="value.script" type="textarea" placeholder="达成条件脚本" :autosize="{
                                minRows: 3
                            }" />
                            <n-divider />
                        </n-space>
                    </template>
                </n-dynamic-input>
                <n-tag :bordered="false">任务目标<template #icon>
                        <n-icon>
                            <CaretDown24Regular />
                        </n-icon>
                    </template></n-tag>
                <n-dynamic-input v-model:value="formValue.quest.target" :on-create="Target_Create">
                    <template #create-button-default>
                        添加一个任务目标
                    </template>
                    <template #default="{ value  }">
                        <n-space vertical>
                            <n-input v-model:value="value.id"><template #prefix>
                                    唯一目标编号：
                                </template></n-input>
                            <n-select v-model:value="value.event" :options="target_event" />
                            <n-input v-model:value="value.node" type="textarea" placeholder="NODE" :autosize="{
                                minRows: 3
                            }" />
                            <n-dynamic-input v-model:value="value.description" placeholder="请输入描述" :min="0" />
                            <n-dynamic-input v-model:value="value.data" placeholder="向外传递数据" :min="0" />
                            <n-tag :bordered="false">任务目标——触发器<template #icon>
                                    <n-icon>
                                        <CaretDown24Regular />
                                    </n-icon>
                                </template></n-tag>
                            <n-dynamic-input v-model:value="value.trigger" :on-create="Trigger_Create">
                                <template #create-button-default>
                                    添加一个触发器
                                </template>
                                <template #default="{ index }">
                                    <n-space vertical>
                                        <n-input v-model:value="value.trigger[index].id"><template #prefix>
                                                目标的唯一编号：
                                            </template></n-input>
                                        <n-select v-model:value="value.trigger[index].type" :options="control_type" />
                                        <n-select v-model:value="value.trigger[index].select" :options="control_select" />
                                        <n-input v-model:value="value.trigger[index].script" type="textarea" placeholder="达成条件脚本"
                                            :autosize="{
                                                minRows: 3
                                            }" />
                                        <n-divider />
                                    </n-space>
                                </template>
                            </n-dynamic-input>

                            <n-divider />
                        </n-space>
                    </template>
                </n-dynamic-input>
            </n-space>

            <pre>{{ JSON.stringify(formValue, null, 2) }}</pre>
        </n-card>
        <n-space vertical>
            <n-card title="输出栏" size="medium" class="right">
                <COPY :copytext="code"></COPY>
                <n-code :code="code" language="yaml" show-line-numbers />
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