<template>
  <n-config-provider :theme=darkTheme>
    <n-message-provider>
      <navbar></navbar>
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { darkTheme } from "naive-ui";
import navbar from '../src/components/Narbar.vue';
// defineComponent({
//   darkTheme
// });
</script>

<style scoped>
/* 
enter-active 定义进入过渡的结束状态
leave-active 定义离开过渡的结束状态
 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.31s;
}

/* 
enter定义进入过渡的开始状态
 */
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
/* 
leave-to离场动画结束后的状态
 */
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>