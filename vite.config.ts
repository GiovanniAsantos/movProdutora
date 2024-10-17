import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // A pasta de saída deve ser configurada corretamente
  },
  resolve: {
    alias: {
      '@': '/src' // Use alias adequadamente
    }
  }
})
