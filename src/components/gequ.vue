<template>
  <div>12324</div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const searchKeyword = computed(() => route.query.a)
console.log(searchKeyword.value)
</script>
