import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Base URL for custom domain (root path)
  base: '/', 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        inventory: resolve(__dirname, 'inventory.html'),
        // about: resolve(__dirname, 'about.html'), // Will add later if needed
      },
    },
  },
})
