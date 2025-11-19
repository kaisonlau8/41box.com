import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Base URL for GitHub Pages (assuming repo name is 'usedcar_web' or similar, 
  // but for now we'll use './' to be relative-path safe or '/' if at root domain.
  // Usually for GH pages it's /repo-name/. We will assume root for now or let user configure.)
  base: './', 
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
