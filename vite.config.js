import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 1000, // лимит для предупреждений о размерах чанков (default: 500)
  },
})
