import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  base: isVercel ? '/' : '/dreamledge/',
  plugins: [react()],
  build: {
    outDir: isVercel ? 'dist' : 'docs'
  },
  server: {
    host: true,
    port: 5173
  }
})
