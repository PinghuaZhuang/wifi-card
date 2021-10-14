import { createApp } from 'vue'
import App from './App.vue'

import './style/global.less'

createApp(App).mount('#app')

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
