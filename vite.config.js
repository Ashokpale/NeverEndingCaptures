import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NeverEndingCaptures/', // EXACTLY MATCH your GitHub repo name
});
