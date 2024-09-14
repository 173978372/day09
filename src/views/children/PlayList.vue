<template>
  <div>{{ props.data.name }}</div>
  <div class="flex" :style="`width:${props.data.children.length * 34}vw`">
    <div v-for="item in props.data.children" :key="item.id">
      <img :src="item.imageUrl" alt="" class="w-[34vw] h-[34vw]" />
      <div class="w-[34vw] h-[4.5vw] overflow-hidden text-[3vw]">{{ item.title }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
console.log(props.data.children.length)
</script>
