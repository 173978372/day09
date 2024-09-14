<template>
  <div class="fixed top-[590px]">
    <div class="flex text-white">
      <div class="flex flex-col items-center w-[20vw]">
        <Icon
          icon="simple-icons:neteasecloudmusic"
          style="color: black"
          class="w-[9vw] h-[9vw] filter"
        />
        <span class="m-3 text-[4vw] text-[#676c6c]">发现</span>
      </div>
      <div class="flex flex-col items-center w-[20vw]">
        <Icon icon="basil:hotspot-solid" style="color: black" class="w-[9vw] h-[9vw] filter" />
        <span class="m-3 text-[4vw] text-[#676c6c]">博客</span>
      </div>
      <div class="flex flex-col items-center w-[20vw]">
        <Icon icon="mingcute:music-line" style="color: black" class="w-[9vw] h-[9vw] filter" />
        <span class="m-3 text-[4vw] text-[#676c6c]">我的</span>
      </div>
      <div class="flex flex-col items-center w-[20vw]">
        <Icon icon="ic:baseline-group" style="color: black" class="w-[9vw] h-[9vw] filter" />
        <span class="m-3 text-[4vw] text-[#676c6c]">关注</span>
      </div>
      <div class="flex flex-col items-center w-[20vw]">
        <Icon icon="basil:comment-solid" style="color: black" class="w-[9vw] h-[9vw] filter" />
        <span class="m-3 text-[4vw] text-[#676c6c]">社区</span>
      </div>
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
