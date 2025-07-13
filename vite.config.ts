import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "portfolio/[name].js",
        chunkFileNames: "portfolio/[name].js",
        assetFileNames: "portfolio/[name].[ext]",
      },
    },
    emptyOutDir: true,
  }
})
