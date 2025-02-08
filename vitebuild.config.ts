import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  base: "/b-toast/",
});
