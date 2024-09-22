<template>
  <div>
    <Input placeholder="手机号" v-model:value="useInfo.phone" /><br />
    <Input placeholder="验证码" v-model:value="useInfo.captcha" type="password" /><br />
  </div>
  <button @click="fn1">发送验证码</button><br />
  <button @click="fn">登录</button>
</template>
<script setup>
import Input from '@/components/Input.vue'
import { ref } from 'vue'
import localforage from 'localforage'
import { login, getCode } from '@/axios'
const useInfo = ref({
  phone: '',
  captcha: ''
})
const fn1 = () => {
  getCode(useInfo.value.phone).then((res) => {
    console.log(res)
  })
}
const fn = () => {
  login(useInfo.value)
    .then((res) => {
      console.log(res)
      if (res.data.code == '200') {
        localforage
          .setItem('useInfo', res.data)
          .then(() => {
            console.log('保存成功')
          })
          .catch(() => {
            console.log('保存失败')
          })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
