/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOT_TOKEN?: string;
  readonly VITE_CHAT_ID?: string;
  readonly BOT_TOKEN?: string;
  readonly CHAT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
