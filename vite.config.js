import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/eileen-jenke-portfolio/',
  plugins: [react()],
});
