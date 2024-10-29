import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias for slick-carousel or other packages if needed
      '~slick-carousel': 'slick-carousel',
    },
  },
  server: {
    // Optionally configure server settings
    port: 3000, // Default port is 3000, you can change it here
  },
  css: {
    // Enable PostCSS or other CSS preprocessors if needed
    preprocessorOptions: {
      scss: {
        // Additional configuration for SCSS (if needed)
        additionalData: `@import "src/styles/variables.scss";`,
      },
    },
  },
});
