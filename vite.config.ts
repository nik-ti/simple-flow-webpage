import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'import.meta.env.VITE_BOT_TOKEN': JSON.stringify(
      process.env.VITE_BOT_TOKEN ?? process.env.BOT_TOKEN ?? ''
    ),
    'import.meta.env.VITE_CHAT_ID': JSON.stringify(
      process.env.VITE_CHAT_ID ?? process.env.CHAT_ID ?? ''
    ),
    'import.meta.env.BOT_TOKEN': JSON.stringify(
      process.env.BOT_TOKEN ?? process.env.VITE_BOT_TOKEN ?? ''
    ),
    'import.meta.env.CHAT_ID': JSON.stringify(
      process.env.CHAT_ID ?? process.env.VITE_CHAT_ID ?? ''
    ),
  },
});
