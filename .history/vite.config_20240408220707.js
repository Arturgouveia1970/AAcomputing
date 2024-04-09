import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import reactSwc from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.GOOGLE_MAP_API_KEY': JSON.stringify('AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E'),
  },
  optimizeDeps: {
    exclude: ['prop-types']
  },
  esbu
});