<template>
  <div class="sticky top-0 z-40 bg-white">
    <div class="flex position-relative">
      <div class="flex flex-col items-center w-[20vw]">
        <Icon icon="mdi:hamburger-menu" class="w-[9vw] h-[9vw]" />
        <!-- <Icon icon="oui:editor-unordered-list" style="color: black" class="w-[9vw] h-[9vw]" /> -->
        <Icon icon="ph:microphone" style="color: black" class="w-[9vw] h-[9vw] absolute right-4" />
      </div>
      <form class="relative flex w-[20vw] max-w-xs" action="/search" method="GET">
        <input
          type="search"
          class="flex-grow rounded-l-md appearance-none rounded shadow"
          placeholder="❤离别开出花-就是南..."
          name="q"
        />
      </form>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
</script>
<style scoped>
.filter {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' /></filter></svg>#colorize");
}
</style>
