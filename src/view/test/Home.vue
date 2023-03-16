<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useMessage } from "naive-ui";
import PostList from '../components/postlist.vue'
import { ref } from 'vue';
import GetPosts from '../composibles/getPosts'

// eslint-disable-next-line no-unused-vars
const message = useMessage();
const {posts,load} = GetPosts()
load()
const ShowPosts = ref(true)
</script>
<template>
  <div v-if="posts">
    <PostList :post="posts" v-if="ShowPosts" />
    <n-button type="primary" size="medium" @click="load">重载</n-button>
    
  </div>
  <div v-else>
    <n-result status="418" title="在给服务器泡茶" description="一切尽在不言中">
      <template #footer>
        <n-button>接受真相就是这么简单</n-button>
      </template>
    </n-result>
  </div>
  <n-button type="default" size="medium" @click="ShowPosts = !ShowPosts">显示/隐藏 稿件</n-button>
</template>

<style>

</style>
