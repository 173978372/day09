<template>
  <div class="flex justify-between mt-[10px] ml-[10px]">
    <div class="text-[#3e4659] font-bold">{{ props.title }}</div>
    <Icon icon="mingcute:more-2-line" class="text-[5.761vw] text-[#9195a1]" />
  </div>
  <slot></slot>
</template>
<script setup>
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
