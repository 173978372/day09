<template>
  <div ref="werper" class="overflow-hidden">
    <div class="">
      <slot />
    </div>
  </div>
</template>
<script setup>
import BScroll from '@better-scroll/core'
import { ref, onMounted, defineProps, onBeforeUnmount } from 'vue'
const werper = ref(null)
let bs = null
const props = defineProps({
  type: {
    type: Object,
    default: () => {
      return {
        scrollX: false,
        scrollY: true
      }
    }
  }
})
const app = () => {
  if (screenX) {
    return
  }
}
onMounted(() => {
  bs = new BScroll(werper.value, props.type)
})
onBeforeUnmount(() => bs.destroy())
</script>
