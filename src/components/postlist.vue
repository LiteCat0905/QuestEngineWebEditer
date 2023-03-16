<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { darkTheme } from "naive-ui";
import SinglePost from "../components/SinglePost.vue"
import { Qq } from '@vicons/fa';
// defineComponent({
//   darkTheme
// });
defineProps({
  post: Array,
});
// onMounted(() => {

//   message.success("加载完成")
// });
// onUnmounted(() => {
//   message.warning("已卸载")
// });
// onUpdated(() => {
//   message.loading("已更新");
// });
</script>

<template>
  <n-config-provider :theme=darkTheme>
    <div>
      <n-message-provider>
        <n-alert title="加入我们的QQ群" type="info">
          <template #icon>
            <n-icon :component="Qq">
            </n-icon>
          </template>
          <span>进入<a target="_blank" href="https://jq.qq.com/?_wv=1027&k=9ZR12jgL" class="link">QQ群</a>了解更多内容！</span>
        </n-alert>
        <br>
        <n-collapse v-for="item in post" :key="item.id">
          <SinglePost :post="item" />
          <n-divider />
        </n-collapse>
      </n-message-provider>
    </div>
  </n-config-provider>
</template>
<style>
.link{
  color: rgb(79,194,222);
}


</style>