import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://berrybraintech.com', // Your live site URL
      routes: [
        '/',
        '/us',
        '/service',
        '/web-development',
        '/app',
        '/seo'
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
});
