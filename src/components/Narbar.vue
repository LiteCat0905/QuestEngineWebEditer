<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <n-layout>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 10px;">
          <n-gradient-text type="success" size="25" class="sitename" :gradient="{
            from: 'rgb(229, 105, 175)',
            to: 'rgb(236, 162, 240)'
          }">
            QuestEngineEditor
          </n-gradient-text>
        </n-layout-sider>
        <n-layout-content content-style="padding: 10px;">
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </header>
</template>

<script setup>
import { h, ref } from "vue";
import { NIcon } from "naive-ui";
import { CalendarEdit24Regular,Home24Regular,Cloud24Regular,AddCircle24Regular } from "@vicons/fluent";
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
  {
    label: () => h(
      "a",
      {
        href: "/",
        rel: "home"
      },
      "主页"
    ),
    key: "hear-the-wind-sing",
    icon: renderIcon(Home24Regular)
  },
  {
    label: "编辑",
    key: "userdata",
    icon: renderIcon(CalendarEdit24Regular),
    disabled: false,
    children: [
      {
        label: () => h(
          "a",
          {
            href: "/quest/add",
            rel: "QuestAdd"
          },
          "创建任务"
        ),
        key: "FilePlus",
        icon: renderIcon(AddCircle24Regular),
      },
      {
        label: () => h(
          "a",
          {
            href: "/quest/add",
            rel: "QuestAdd"
          },
          "上传编辑文件"
        ),
        disabled: true,
        key: "FileUpdate",
        icon: renderIcon(Cloud24Regular),
      }
    ]
  },
];

const activeKey = ref(null)
</script>

<style scoped>
n-menu {
  justify-content: center;
}

.n-layout-header,
.n-layout-footer {
  background: rgba(255, 204, 77, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(255, 204, 77, 0.4);
}

.n-layout-content {
  background: rgba(255, 204, 77, 0.4);
}

n-gradient-text {
  max-width: 100%;
  max-height: 100%;
}

.sitename {
  /* align-items: center; */
  display: flex;
  /* padding: -20px; */
}
</style>