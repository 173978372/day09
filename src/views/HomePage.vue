<template>
  <!-- <Menu :data="menu" /> -->
  <img />
  <BlockType v-for="item in block" :key="item.blockCode" :data="item" class="mt-[10px]"></BlockType>
</template>
<script setup>
import { getDate } from '../axios/index'
import BlockType from './children/BlockType.vue'
import { useRequest } from 'vue-request'
import { ref } from 'vue'
const block = ref([])
getDate.then((res) => {
  block.value = res.data.data.blocks
})
const { data } = useRequest(getDate)
console.log(data)
</script>
