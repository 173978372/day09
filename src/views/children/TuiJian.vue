<template>
  <Wraper :title="props.data.name"
    ><BetterScoll
      :type="{
        scrollX: true,
        scrollY: false
      }"
    >
      <div v-for="item in props.data.children" :key="item.id" class="w-[20vw] mx-[10px] relative">
        <Curated :item="item">
          <img :src="item.imageUrl" alt="" class="w-[80px] h-[80px]" />
          <span class="absolute right-0 top-[0] text-[#fff] text-[10px]">{{
            getMath(item.playCount)
          }}</span>
          <div class="text-[#3e4650] line-clamp-2 text-[12px]">{{ item.title }}</div>
        </Curated>
      </div>
    </BetterScoll></Wraper
  >
</template>
<script setup>
import { defineProps } from 'vue'
import BetterScoll from '@/components/BetterScoll.vue'
import Wraper from '@/components/Wraper.vue'
import Curated from '@/components/Curated.vue'
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
console.log(props.data)
let getMath = (number) => {
  let result = ''
  let a = number.toString()

  if (a.length >= 5 && a.length < 6) {
    result = a[0] + '.' + a[1] + '万'
  }
  if (a.length >= 6 && a.length < 7) {
    result = a[0] + a[1] + '.' + a[2] + '万'
  }
  if (a.length >= 7 && a.length < 8) {
    result = a[0] + a[1] + a[2] + '.' + a[3] + '万'
  }
  if (a.length >= 8 && a.length < 9) {
    result = a[0] + a[1] + a[2] + a[3] + '.' + a[4] + '万'
  }
  if (a.length >= 9) {
    result = a[0] + '.' + a[1] + '亿'
  }
  return result
}
</script>
