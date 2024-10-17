import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

// Correct way to create __dirname in an ES module environment
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Correct alias path resolution
    }
  },
  server: {
    watch: {
      usePolling: true // Enable polling to watch for file changes
    }
  }
})
