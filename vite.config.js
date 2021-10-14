import { defineConfig } from 'vite'
import merge from 'lodash/merge'
import path from 'path'
// import vue from '@vitejs/plugin-vue'

function resolve(url) {
  return path.resolve(__dirname, url)
}

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  // const isProduction = command !== 'build'
  const isLib = mode === 'lib'

  const config = {
    // serve 独有配置
    // plugins: [vue()],
    // base: './',
    // resolve: {
    //   alias: {
    //     '@packages': './packages',
    //     '@': './src',
    //   },
    // },
    css: {
      postcss: {
          plugins: [
              require('autoprefixer')
          ]
      }
    },
    build: {
      sourcemap: true,
      // brotliSize: false,
    },
  }

  if (isLib) {
    merge(config, {
      publicDir: false,
      resolve: {
        alias: {
          '@packages': resolve('./packages'),
          '@': resolve('./src')
        },
        // monorepos依赖去重
        // dedupe: [
        //   'lodash',
        //   '@zstark/wifi-qrcode'
        // ],
      },
      build: {
        outDir: resolve('./packages/@zstark/wifi-qrcode/dist'),
        lib: {
          entry: resolve('./packages/@zstark/wifi-qrcode/index.js'),
          // formats: 'umd',
          name: 'wifiQR',
          fileName: 'wifiQR',
        },
        rollupOptions: {
          output: {
            globals: {
              QRCode: true,
            }
          },
        },
      }
    })
  }

  return config
})
