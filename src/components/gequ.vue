<template>
  <button class="w-[80px] h-[80px]"  @click="fn1">返回</button>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getSong} from '../axios/index'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const song = ref([])
const route = useRoute()
const searchKeyword = computed(() => route.query.a)
console.log(searchKeyword.id)
const fn1 = ()=>{
   router.push({ path: '/'})
}
getSong(searchKeyword.value).then((res) => {
  song.value = res.data.songs
  console.log(song.value);
})
</script>
