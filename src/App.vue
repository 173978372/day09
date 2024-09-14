<template>
  <!-- <HomePage></HomePage> -->
  <!-- <div ref="elref" class="w-[100vw] overflow-hidden">
    <div class="flex w-[240vw] h-[50vw]">
      <div class="w-[80vw] bg-green-200">1</div>
      <div class="w-[80vw] bg-green-300">2</div>
      <div class="w-[80vw] bg-green-400">3</div>
    </div>
  </div> -->
  <BetterScoll class="h-[20vw] bg-green-400">
    <div class="h-[80vw] bg-green-200">1</div>
    <div class="h-[80vw] bg-green-300">2</div>
    <div class="h-[80vw] bg-green-400">3</div>
  </BetterScoll>
</template>
<script setup>
// import HomePage from './views/HomePage.vue'
// import { ref, onMounted } from 'vue'
import BetterScoll from './components/BetterScoll.vue'
</script>
