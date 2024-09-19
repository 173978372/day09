<template>
  <div>
    <button class="w-[80px] h-[80px]" @click="fn1">返回</button>
    <div class="flex">
      <div class="mr-1 relative">
        <img :src="kdan.img" alt="" class="w-[30vw]" />
        <span class="absolute right-0 top-[0] text-[#fff] text-[15px]">{{
          getMath(kdan.playCount)
        }}</span>
      </div>
      <div>
        <div>{{ kdan.name }}</div>
        <div class="flex justify-between w-[30vw] mt-3">
          <div v-for="item in kdan.tags">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="line-clamp-1 mb-[10px] mt-[5px]">{{ kdan.description }}</div>
    <div class="mt-[10px]">
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
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSong, getk } from '@/axios'
import { Icon } from '@iconify/vue'
const router = useRouter()
let song = ref([])
const route = useRoute()
let kdan = ref({})
const searchKeyword = computed(() => route.query.a)
const fn1 = () => {
  router.push({ path: '/' })
}
getSong(searchKeyword.value).then((res) => {
  song.value = res.data.songs
})
getk(searchKeyword.value).then((res) => {
  kdan.value.name = res.data.playlist.name
  kdan.value.img = res.data.playlist.coverImgUrl
  kdan.value.tags = res.data.playlist.tags
  kdan.value.description = res.data.playlist.description
  kdan.value.playCount = res.data.playlist.playCount
  console.log(res.data.playlist)
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
