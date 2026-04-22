import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    allowedHosts: ['front.weirdloop.ggff.net'],
  },
  plugins: [react()],
})
