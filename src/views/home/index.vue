<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from 'vue'
import createWifiQRCode from '@zstark/wifi-qrcode/index'

const qrcode = ref()

onMounted(function () {
  console.log('sdf', qrcode.value)
  createWifiQRCode(qrcode.value)
})
</script>

<template>
  <div ref="qrcode" id="wifi-qrcode"></div>
</template>

<style lang="less">
body {
  color: var(--color);
}
</style>
