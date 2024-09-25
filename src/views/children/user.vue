<template>
  <div>{{ XinxiStore.userLogin }}</div>
  <div>123</div>
</template>
<script setup>
import { useXinxiStore } from '@/store'
const XinxiStore = useXinxiStore()
console.log(XinxiStore.userLogin)
</script>
