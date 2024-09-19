<template>
  <div></div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    Required: true
  }
})
console.log(props.data)
</script>
