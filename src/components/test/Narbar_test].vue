<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <n-layout>
      <n-layout-content content-style="padding: 24px;">
        <n-gradient-text type="success" size="20">
          MPanel —— RTCraft
        </n-gradient-text>
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      </n-layout-content>

    </n-layout>
  </header>

</template>

<script setup>
import { h, ref } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(
      "a",
      {
        href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
        target: "_blank",
        rel: "noopenner noreferrer"
      },
      "且听风吟"
    ),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon)
  },
  {
    label: "2023年的最棒的橡胶玩具",
    key: "pinball-1973",
    icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: "BlueCola_",
        key: "rat"
      }
    ]
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",
    icon: renderIcon(BookIcon),
    disabled: true
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
            icon: renderIcon(PersonIcon)
          },
          {
            label: "羊男",
            key: "sheep-man",
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky"
          }
        ]
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich"
          }
        ]
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes"
      }
    ]
  }
];

const activeKey = ref(null)
</script>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}

n-gradient-text {
  max-width: 100%;
  max-height: 100%;
}
</style>