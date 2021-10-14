<script setup>
import { onMounted, ref } from 'vue'
import createWifiQRCode from '@zstark/wifi-qrcode/index'

const qrcode = ref()

// const onPrint = () => {
//   if (!settings.ssid.length) {
//     setErrors({
//       ...errors,
//       ssidError: t('wifi.alert.name'),
//     });
//     return;
//   }

//   if (settings.ssid.length > 0) {
//     if (settings.password.length < 8 && settings.encryptionMode === 'WPA') {
//       setErrors({
//         ...errors,
//         passwordError: t('wifi.alert.password.length.8'),
//       });
//     } else if (
//       settings.password.length < 5 &&
//       settings.encryptionMode === 'WEP'
//     ) {
//       setErrors({
//         ...errors,
//         passwordError: t('wifi.alert.password.length.5'),
//       });
//     } else {
//       document.title = 'WiFi Card - ' + settings.ssid;
//       window.print();
//     }
//   }
// };

onMounted(function () {
  createWifiQRCode(qrcode.value)
})
</script>

<template>
  <div ref="qrcode" id="wifi-qrcode"></div>
</template>

<style lang="less" scoped>
</style>
