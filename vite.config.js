import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/redsamurai/',
  server: {
    host: true, // Exposes to the network automatically
    port: 5173, // Change this if needed
    strictPort: true, // Ensures it doesn't change the port
  },
  build: {
    outDir: 'build'
  }

})
