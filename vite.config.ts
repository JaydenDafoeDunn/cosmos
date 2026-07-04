import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cosmos/',
  build: { target: 'es2022', chunkSizeWarningLimit: 1200 },
});
