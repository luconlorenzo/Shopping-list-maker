import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://localhost:7219",
        changeOrigin: true,
        secure: false,
      },
      "/auth": {
        target: "https://localhost:7219",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "../wwwroot",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
