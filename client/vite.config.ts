import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    host: true,
    strictPort: true,
    port: 3000, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
    // origin: "http://0.0.0.0:3000", 
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      // '@assets': path.resolve(__dirname, './src/assets'),
      '@core': path.resolve(__dirname, './src/core'),
      '@locale': path.resolve(__dirname, './src/locale')
    },
  }
});
