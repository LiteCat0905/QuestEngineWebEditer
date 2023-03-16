<script setup>
import { useMessage } from "naive-ui";
import { ref, computed, watch, watchEffect } from 'vue';
const searcha = ref("")
const arr = ref([
  { label: "孙笑川", value: "孙笑川" },
  { label: "黄佩桦", value: "黄佩桦" },
  { label: "BlueCola", value: "BlueCola" },
  { label: "煌浿錵", value: "煌浿錵" },
  { label: "丽丽", value: "丽丽" },
  { label: "User", value: "User" },
  { label: "Admin", value: "Admin" },
  { label: "ndxzzy", value: "ndxzzy" },
  { label: "genshi impact", value: "genshin impact" },
  { label: "原神", value: "原神" },
]);
const matchNames = computed(() => {
  return arr.value.filter((item) => item.value.includes(searcha.value.replace("@", "").replace(" ", "")));
})
function OnClick() {
  console.log(searcha.value);
  message.info(searcha.value)
}
const message = useMessage();

watch(searcha, (New, Old) => {
  message.success(Old + " => " + New)
});


</script>
<template>
  <n-scrollbar>
    <n-space vertical>
      <p>正在搜索 {{ searcha }}</p>
      <n-popover trigger="click" :duration="500">
        <template #trigger>
          <n-button @click="OnClick">年度最佳游戏什么</n-button>
        </template>
        <span>"IDK"</span>
      </n-popover>
      <n-mention type="textarea" :options="arr" v-model:value="searcha" />
      <p v-for="item in matchNames" key="item">{{ item.label }}</p>
    </n-space>

  </n-scrollbar>

</template>

<style>

</style>
