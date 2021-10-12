import { defineConfig } from 'vite'
import merge from 'lodash/merge'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  // const isProduction = command !== 'build'
  const isLib = mode === 'lib'

  const config = {
    // serve 独有配置
    // plugins: [vue()],
    build: {
      sourcemap: true,
      // brotliSize: false,
    },
  }

  if (isLib) {
    merge(config, {
      publicDir: false,
      // resolve: {
      //   // monorepos依赖去重
      //   dedupe: [
      //     'lodash',
      //     '@zstark/wifi-qrcode'
      //   ],
      // },
      build: {
        outDir: './packages/@zstark/wifi-qrcode/dist',
        lib: {
          entry: './packages/@zstark/wifi-qrcode/index.js',
          // formats: 'umd',
          name: 'wifiQR',
          fileName: 'wifiQR',
        },
      }
    })
  }

  return config
})
