<template>
  <div ref="werper" :class="`${props.type.scrollX ? 'flex' : ''} mt-[6px] overflow-hidden`">
    <div :class="`${props.type.scrollX ? 'flex flex-1' : ''}`">
      <slot />
    </div>
  </div>
</template>
<script setup>
import BScroll from '@better-scroll/core'
import { ref, onMounted, defineProps, onBeforeUnmount, watchEffect, nextTick } from 'vue'
const werper = ref('null')
let bs = null
const props = defineProps({
  dep: {
    required: true
  },
  type: {
    type: Object,
    default() {
      return {
        scrollX: false,
        scrollY: true
      }
    }
  }
})

onMounted(() => {
  bs = new BScroll(werper.value, props.type)
})
watchEffect(() => {
  console.log(props.dep)
  nextTick(() => bs?.refresh())
})
onBeforeUnmount(() => bs.destroy())
</script>
