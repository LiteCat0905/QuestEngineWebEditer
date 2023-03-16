<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <n-layout>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 10px;">
            <n-gradient-text type="success" size="25" class="sitename">
              MPanel —— RTCraft
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
import { Home, LogInOutline } from "@vicons/ionicons5";
import { UserCircle } from "@vicons/fa";
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
  {
    label: () => h(
      "a",
      {
        href: "/app",
        rel: "home"
      },
      "主页"
    ),
    key: "hear-the-wind-sing",
    icon: renderIcon(Home)
  },
  {
    label: "用户",
    key: "userdata",
    icon: renderIcon(UserCircle),
    disabled: false,
    children: [
      {
        label: () => h(
          "a",
          {
            href: "/auth/loginout",
            rel: "loginout"
          },
          "登出"
        ),
        key: "loginout",
        icon: renderIcon(LogInOutline),
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
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.4);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
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