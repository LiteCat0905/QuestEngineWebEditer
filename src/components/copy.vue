<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <n-button text @click="Clipboard(props.copytext,$event)">
        <template #icon>
            <n-icon>
                <Copy24Regular />
            </n-icon>
        </template>
        复制配置
    </n-button>
</template>
<script setup>

import {  Copy24Regular } from "@vicons/fluent";
import Clipboard from '../utils/clipboard';

const props = defineProps({
  copytext: String,

});
</script>