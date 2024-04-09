import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSwc from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [reactRefresh(), reactSwc()],
  define: {
    'process.env.GOOGLE_MAP_API_KEY': JSON.stringify(''),
  },
});