import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT,
      host: true,
      strictPort: true
    },
    define: {
      __APP_VERSION__: JSON.stringify('v1.0.0'),
      __API_URL__: JSON.stringify(env.VITE_API_URL),
    }
  }
})
