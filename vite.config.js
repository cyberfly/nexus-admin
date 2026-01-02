import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          header: readFileSync(resolve(__dirname, 'src/components/header.html'), 'utf-8'),
          sidebar: readFileSync(resolve(__dirname, 'src/components/sidebar.html'), 'utf-8'),
        },
      },
    }),
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
