// vite.config.js
import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://berrybraintech.com',
      robots: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      outDir: 'dist',
    })
  ],
});
