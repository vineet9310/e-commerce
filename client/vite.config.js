import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // ✅ Removed invalid tailwindcss() plugin
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
