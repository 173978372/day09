<template>
  <div class="flex justify-between mb-[10px] mt-[3px] pt-2">
    <Icon icon="ic:twotone-arrow-back-ios" class="w-[7vw] h-[7vw]" style="color: black" />
    <div class="pr-3 pt-1">游客登陆</div>
  </div>
  <div class="h-[20vw] flex justify-center items-center pt-25">
    <Icon
      icon="simple-icons:neteasecloudmusic"
      style="color: red"
      class="w-[15vw] h-[15vw] filter"
    />
    <div class="pl-5 text-2xl">网易云音乐</div>
  </div>

  <div class="flex justify-center pl-5 pt-8 h-[60vw]">
    <div>
      手机号：<Input
        placeholder="请输入手机号"
        class="w-[120px]"
        v-model:value="useInfo.phone"
      /><br />
      验证码：<Input
        placeholder="请输入验证码"
        class="w-[120px]"
        v-model:value="useInfo.captcha"
        type="password"
      /><br />
    </div>
  </div>
  <div class="h-[10vw]">
    <button @click="fn" class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-24">
      登录
    </button>
    <br />
    <button
      @click="fn1"
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-20"
    >
      发送验证码
    </button>
  </div>
  <img
    src="../img/5FCFB688BF47CEA5FED5BAB01605BE50.png"
    style="width: 100%; height: 300px; opacity: 0.8"
  />
</template>
<script setup>
import Input from '@/components/Input.vue'
import localforage, { setItem } from 'localforage'
import { login, getCode } from '@/axios'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useUserStore, useXinxiStore } from '@/store'
import { watch, ref } from 'vue'
import to from 'await-to-js'
import { showToast } from 'vant'
import { useRequest } from 'vue-request'
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const XinxiStore = useXinxiStore()
const useInfo = ref({
  phone: '',
  captcha: ''
})
const {
  run: fn1,
  data: result,
  loading
} = useRequest(() => getCode(useInfo.value.phone), {
  manual: true
})
const {
  run: fn,
  data: res,
  loading: loadingLogin
} = useRequest(() => login(useInfo.value), {
  manual: true
})
watch(result, () => {
  console.log(result.value)
})
watch(res, async () => {
  const [error] = await to(localforage.setItem('useInfo', res.value.data))
  if (error) return showToast('')
  localforage.getItem('useInfo').then((res) => {
    XinxiStore.page(res.account.id)
  })
  return router.replace(route.query.originPath)
})
// const fn3 = () => {
// login(useInfo.value)
//   .then((res) => {
//     console.log(res)
//     if (res.data.code == '200') {
//       localforage
//         .setItem('useInfo', res.data)
//         .then(() => {
//           console.log('保存成功')
//           XinxiStore.page(res.data.id)
//           router.push(route.query.originPath)
//         })
//         .catch(() => {
//           console.log('保存失败')
//         })
//     }
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// localforage.getItem('useInfo').then((res) => {
//   console.log(res.account.id)
//   XinxiStore.page(res.account.id)
//   router.push('/user')
// })
// }
</script>
