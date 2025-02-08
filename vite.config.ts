import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), libInjectCss()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  base: "/b-toast/",
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, "src/package/index.ts"),
      name: "b-toast",
      // the name of the output files when the build is run
      fileName: "b-toast",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
