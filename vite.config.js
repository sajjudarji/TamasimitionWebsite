import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",   // ✅ ADD THIS LINE

  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom', '@material-tailwind/react', 'framer-motion'],
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@material-tailwind/react', 'framer-motion'],
  }
})