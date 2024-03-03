import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{//路径别名
    alias:{
      '@': resolve(__dirname,'./src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      //配置自定义代理规则
      '/api': {
        target: 'https://video.lushen.click',
        changeOrigin: true, //是否跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
