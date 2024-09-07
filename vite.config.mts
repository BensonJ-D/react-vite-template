import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  mode: 'development',
  build: {
    rollupOptions: {
      input: {
        app: './src/index.tsx'
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  server: {
    // https: {
    //   cert: './ssl/certificate.pem',
    //   key: './ssl/private.key'
    // },
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    react(),
    createHtmlPlugin({ template: './src/index.html' })
  ]
});
