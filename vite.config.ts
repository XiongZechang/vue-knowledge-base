import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], 
  server: {
    proxy: {
      '/api81': {
        target: 'http://43.138.100.3:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api81/, ''),
      },
      '/api82': {
        target: 'http://43.138.100.3:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api82/, ''),
      },
    },
  },
})
