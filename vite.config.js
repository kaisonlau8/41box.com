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
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
