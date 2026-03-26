import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dreamledge/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  },
  server: {
    host: true,
    port: 5173
  }
})
