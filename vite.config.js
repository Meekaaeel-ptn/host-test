import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      {
        src: 'src/assets/images/icons/*',
        dest: 'assets/icons'
      }
    ]
  })],
  assetsInclude: ['**/*.PNG'],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
