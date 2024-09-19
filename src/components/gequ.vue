<template>
  <div>
    <button class="w-[80px] h-[80px]" @click="fn1">返回</button>
    <!-- <img :src="searchKeyword.id.imageUrl" alt="" class="w-[80px] h-[80px]" /> -->
    <div>
      <div class="flex flex-col space-y-7">
        <div v-for="(item, index) in song" class="flex">
          <div>
            <div class="flex">
              <div class="mr-4 ml-2 w-[3vw]">{{ index + 1 }}</div>
              <div class="overflow-hidden text-ellipsis w-[85vw] line-clamp-1">
                {{ item.name }}
              </div>
            </div>

            <p class="text-gray-600 text-xs absolute left-9">
              {{ item.ar[0].name }}-{{ item.al.name }}
            </p>
          </div>
          <div class="right-3">
            <Icon icon="mingcute:more-2-line" class="text-[5.761vw] text-[#9195a1]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getSong, getk } from '@/axios'
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
getk(searchKeyword.value).then((res) => {
  console.log(res.data.playlist)
})
</script>
