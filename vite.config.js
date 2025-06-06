import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // для локального запуску
  },
  build: {
    outDir: 'dist' // ⚠️ обов’язково для Vercel!
  }
})
