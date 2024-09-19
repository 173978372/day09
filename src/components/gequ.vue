<template>
  <div>
    <button class="w-[80px] h-[80px]" @click="fn1">返回</button>
    <!-- <img :src="searchKeyword.id.imageUrl" alt="" class="w-[80px] h-[80px]" /> -->
    <div>
      <div class="flex flex-col relative space-y-7">
        <div v-for="(item, index) in song">
          <span class="mr-4 ml-2 ">{{ index + 1 }}</span>
          <span class="overflow-hidden whitespace-nowrap text-ellipsis"> {{ item.name }}</span>
<p class="text-gray-600 text-xs absolute left-9">{{ item.ar[0].name }}-{{ item.al.name }}</p>
          <span class="absolute right-3"
            ><Icon icon="mingcute:more-2-line" class="text-[5.761vw] text-[#9195a1]"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getSong } from '../axios/index'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
const router = useRouter()
const song = ref([])
const route = useRoute()
const searchKeyword = computed(() => route.query.a)
const fn1 = () => {
  router.push({ path: '/' })
}
getSong(searchKeyword.value).then((res) => {
  song.value = res.data.songs
  console.log(song.value)
})
</script>
