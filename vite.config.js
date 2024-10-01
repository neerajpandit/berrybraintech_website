import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})




// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import sitemap from 'vite-plugin-sitemap';

// export default defineConfig({
//   plugins: [
//     react(),
//     sitemap({
//       hostname: 'https://berrybraintech.com',
//       routes: [
//         '/',                    // Home page
//         '/us',                  // Us page
//         '/service',             // Service page
//         '/web-development',     // Web Development page
//         '/app',                 // App page
//         '/seo',                 // SEO page
//       ],
//     }),
//   ],
//   build: {
//     outDir: 'dist',  // Make sure to point to the correct build output directory
//   },
// });









// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',  // Ensure the build output goes to the 'dist' folder
//   },
// });
