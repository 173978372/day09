<template>
  <div>
    <slot />
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: {
    type: Array,
    required: true
  }
})
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
