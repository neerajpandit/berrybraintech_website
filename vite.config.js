import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sitemapPlugin } from 'vite-plugin-sitemap';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://berrybraintech.com', // Your domain
      outDir: 'dist',  // Output sitemap in dist
    }),
  ],
  build: {
    outDir: 'dist', // Vercel expects build output in dist
  },
  publicDir: 'public', // Serve assets from public folder, like robots.txt
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Aliases for cleaner imports
    },
  },
});
