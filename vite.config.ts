import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Only proxy to Laravel when you explicitly run against it locally (VITE_API_URL=/api).
  // Bolt.new and other previews leave VITE_API_URL empty and use the built-in demo data.
  const useLaravelProxy = env.VITE_API_URL === '/api';

  return {
    plugins: [react()],
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
