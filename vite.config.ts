import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base matches the GitHub Pages path: https://bvinsonrez.github.io/YouMakeTheCall/
export default defineConfig({
  base: '/YouMakeTheCall/',
  plugins: [react()],
  define: {
    // No key in the public build; ai.ts falls back to scripted responses.
    'process.env.API_KEY': JSON.stringify(''),
  },
});
