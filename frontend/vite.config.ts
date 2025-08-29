import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/ssssmarttech/',  // Frontend service serves from root, nginx handles the /ssssmarttech prefix
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
