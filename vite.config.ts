import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    // base: "https://nhttoan0809.github.io/portfolio/",
    base: env.VITE_PUBLIC_URL,
    build: {
      outDir: "build",
      emptyOutDir: true,
    },
    define: {
      __PUBLIC_URL__: JSON.stringify(env.VITE_PUBLIC_URL),
    },
  };
});
