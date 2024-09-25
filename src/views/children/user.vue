<template>
  <div class="flex flex-col items-center">
    <img :src="XinxiStore.userLogin.data.profile.avatarUrl" class="w-[80px]" />
    <div class="">头像</div>
  </div>
  <div>昵称：{{ XinxiStore.userLogin.data.profile.nickname }}</div>
  <div>等级： {{ XinxiStore.userLogin.data.level }}</div>
</template>
<script setup>
import { useXinxiStore } from '@/store'
const XinxiStore = useXinxiStore()
console.log(XinxiStore.userLogin)
</script>
