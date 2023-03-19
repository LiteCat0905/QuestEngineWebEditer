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
    <a href="https://github.com/LiteCat0905/QuestEngineWebEditor" class="github-corner"
      aria-label="GitHub在这里啦！" target="_blank"><svg width="80" height="80" viewBox="0 0 250 250"
        style="fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor" class="octo-body"></path>
      </svg></a>
  </header>
</template>

<script setup>
import { h, ref } from "vue";
import { NIcon } from "naive-ui";
import { CalendarEdit24Regular, Home24Regular, DocumentEdit24Regular, DocumentAdd24Regular, CommentAdd24Regular, CommentEdit24Regular } from "@vicons/fluent";
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
        key: "Quest",
        icon: renderIcon(DocumentAdd24Regular),
      },
      {
        label: () => h(
          "a",
          {
            href: "/quest/edit",
            rel: "QuestEdit"
          },
          "编辑任务"
        ),
        key: "Quest",
        icon: renderIcon(DocumentEdit24Regular),
      },
      {
        label: () => h(
          "a",
          {
            href: "/cov/add",
            rel: "CovAdd"
          },
          "创建对话"
        ),
        key: "Cov",
        icon: renderIcon(CommentAdd24Regular),
      },
      {
        label: () => h(
          "a",
          {
            href: "/cov/edit",
            rel: "CovAdd"
          },
          "编辑对话"
        ),
        key: "Cov",
        icon: renderIcon(CommentEdit24Regular),
      }
    ]
  },
];

const activeKey = ref(null)
</script>

<style scoped>
.github-corner:hover .octo-arm {
        animation: octocat-wave 560ms ease-in-out
      }

      @keyframes octocat-wave {

        0%,
        100% {
          transform: rotate(0)
        }

        20%,
        60% {
          transform: rotate(-25deg)
        }

        40%,
        80% {
          transform: rotate(10deg)
        }
      }

      @media (max-width:500px) {
        .github-corner:hover .octo-arm {
          animation: none
        }

        .github-corner .octo-arm {
          animation: octocat-wave 560ms ease-in-out
        }
      }

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
}</style>