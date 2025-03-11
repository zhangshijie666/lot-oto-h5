<template>
  <view @click="onLogin">登录</view>
</template>

<script setup>
import { login } from '@/api/index'
import { ENV } from '@/dd-env'

let onLogin = async () => {
  console.log('登录')
  console.log('环境变量', ENV)

  let res = await login()
}
</script>

<style scoped></style>
