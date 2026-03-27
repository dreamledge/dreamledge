import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/' : '/dreamledge/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    host: true,
    port: 5173
  }
})
