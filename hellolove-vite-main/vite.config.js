import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // встановіть порт, якщо 5173 та 5174 не працюють
  },
})