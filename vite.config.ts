import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cosmos/',
  build: { target: 'es2022', chunkSizeWarningLimit: 1200 },
  define: {
    __BUILD__: JSON.stringify(`${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`),
  },
});
