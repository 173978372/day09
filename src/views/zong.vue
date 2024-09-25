<template>
  <!-- <TopPage></TopPage>
  <HomePage></HomePage>
  <div class="h-[26vw]"></div>
  <Bottom></Bottom> -->
  <div ref="ele" class="w-[100px] h-[100px] bg-red-400">
    全屏展示
    <div>
      <button @click="fn2" v-if="qw">退出全屏</button>
      <button @click="fn1" v-else>进入全屏</button>
    </div>
  </div>
</template>
<script setup>
import TopPage from '@/views/TopPage.vue'
import HomePage from '@/views/HomePage.vue'
import Bottom from '@/views/Bottom.vue'
import { ref } from 'vue'
const qw = ref(false)
let ele = ref(null)
let fn1 = () => {
  ele.value.requestFullscreen().then(() => {
    qw.value = true
  })
}
let fn2 = () => {
  console.log(1)
  console.log(ele)
  document.exitFullscreen().then(() => {
    qw.value = false
  })
}
</script>
