import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       vendor: ['vue', 'vue-router', 'pinia'],
    //     },
    //   },
    // },
    cssCodeSplit: true,
    cssMinify: true,
    target: 'es2015',
    emptyOutDir: true,
  },
})
