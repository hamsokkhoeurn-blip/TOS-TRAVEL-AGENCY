import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Only proxy to Laravel when you explicitly run against it locally (VITE_API_URL=/api).
  // Bolt.new and other previews leave VITE_API_URL empty and use the built-in demo data.
  const useLaravelProxy = env.VITE_API_URL === '/api';

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['image.png', 'TOS_Travel_Agency_Logo.png'],
        manifest: {
          name: 'System Tos Travel Agency — Siem Reap Tours & Stays',
          short_name: 'TOS Travel',
          description:
            'System Tos Travel Agency offers curated Siem Reap tours, transportation, stays, and local travel experiences.',
          theme_color: '#0f766e',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          icons: [
            {
              src: '/TOS_Travel_Agency_Logo.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/TOS_Travel_Agency_Logo.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/TOS_Travel_Agency_Logo.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,webp,svg}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: useLaravelProxy
      ? {
          proxy: {
            '/api': {
              target: env.VITE_PROXY_TARGET || 'http://127.0.0.1:8000',
              changeOrigin: true,
            },
          },
        }
      : {},
  };
});
