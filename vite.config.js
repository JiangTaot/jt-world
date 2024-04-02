import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
server: {
    port: 5173, // 假设前端开发服务器运行在 8080 端口
    proxy: {
      '/api': { // 匹配所有以 '/api' 开始的请求路径
        target: 'http://localhost:8888', // 将这些请求代理到此目标 URL
        changeOrigin: true, // 是否允许代理请求时携带 cookie 等凭证信息
        rewrite: p => p.replace(/^\/api/, ''),
        secure: false, // 如果目标地址是 https，设置为 false 可以允许自签名证书
      },
    },
  }
})

