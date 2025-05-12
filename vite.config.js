import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
  tailwindcss()
],
  build: {
    chunkSizeWarningLimit: 1000, // optional: increase if you want to suppress the warning
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          icons: ['react-icons'],
          slick: ['react-slick', 'slick-carousel'],
        },
      },
    },
  },
});

