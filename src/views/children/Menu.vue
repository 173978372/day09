<template>
  <div ref="werper">
    <div class="flex" :style="`width:${Props.data.length * 20}vw`">
      <div
        v-for="(item, index) in Props.data"
        :key="item.name"
        class="flex flex-col items-center w-[20vw]"
      >
        <div class="relative">
          <img :src="item.img" class="filter w-[9vw]" />
          <span
            class="text-[2.5vw] text-white absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            v-if="index === 0"
            >{{ data }}</span
          >
        </div>
        <span class="text-[2.99vw] text-[#676c6c]">
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, onMounted, onBeforeUnmount, ref } from 'vue'
import BScroll from '@better-scroll/core'
const werper = ref(null)
let bs = null
const data = new Date().getDate()
console.log(data)

const Props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['click'])
onMounted(() => {
  bs = new BScroll(werper.value, { scrollX: true, scrollY: false })
})
onBeforeUnmount(() => bs.destyoy())
</script>
<style scoped>
.filter {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' /></filter></svg>#colorize");
}
</style>
