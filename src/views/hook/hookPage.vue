<template>
  <div ref="div" class="w-[100px] h-[100px] bg-green-400" @click="togger"></div>
  <div>
    <div v-if="as" @click="fn1">在线</div>
    <div v-else>离线</div>
  </div>
</template>
<script setup>
import { fullScreen, wang, useHttp } from '@/han'
import to from 'await-to-js'
import { getDate } from '@/axios'
function getadd() {
  return new Promise((resolve, reject) => {
    const qw = Math.random()
    if (qw > 0.5) {
      resolve(qw)
    } else {
      reject(qw)
    }
  })
}
import { ref } from 'vue'
const div = ref(null)
const { togger } = fullScreen(div)
let as = wang().value
console.log()
getadd()
  .then((qw) => {})
  .catch((qw) => {})
const { data, loading, error, run } = useHttp(getDate, {
  manual: true,
  transData(res) {
    return res.data.data.blocks
  }
})
let fn1 = () => {
  run()
  console.log(loading.value, data.value, error.value)
}
</script>
