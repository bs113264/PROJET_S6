import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Ajoutez une extension pour les fichiers .mov
    extensions: [
      '.js',
      '.json',
      '.vue',
      '.mjs',
      '.ts',
      '.jsx',
      '.tsx',
      '.css',
      '.svg',
      '.MOV',
    ],
  },
});
