// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/css/main.css'
            }
            // Copy images from src/assets/images to dist/assets/images
            if (assetInfo.name && assetInfo.name.match(/\.(png|svg|webp|jpg|jpeg)$/)) {
              return 'assets/images/[name].[ext]'
            }
            return 'assets/[ext]/[name].[ext]'
          },
        },
      },
      cssCodeSplit: false,
      minify: true,
    },
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    },
  },
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'preserve',
    assets: '_assets',
    inlineStylesheets: 'never',
  },
  site: 'https://pesty-landing.vercel.app',
})
