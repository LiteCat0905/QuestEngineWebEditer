
<script setup>
import { computed } from 'vue'
const props = defineProps({
    post: Object,
})


const name = computed(() => {
    return props.post.name;
})
const id = computed(() => {
    return props.post.id;
})
</script>



<template>
    <n-space vertical>
        <n-collapse-item :title="name" :name="id">
            <span>{{ props.post.body }}</span>
            <!-- eslint-disable vue/valid-v-for -->
            <br>
            <n-space>
                <n-tag v-for="item in post.tag" :bordered="false">#{{ item }}</n-tag>
            </n-space>

            <template #header-extra>
                <span>{{ props.post.emoji }}</span>
            </template>
        </n-collapse-item>
    </n-space>
</template>

<style>
.n-tag {
    margin-top: 10px;
}
</style>