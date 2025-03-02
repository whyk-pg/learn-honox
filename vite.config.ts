// vite.config.ts
import build from "@hono/vite-build/cloudflare-pages";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [tailwindcss()],
      build: {
        rollupOptions: {
          input: ["./app/client.ts", "/app/style.css"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
        emptyOutDir: false,
      },
    };
  }
  return {
    ssr: {
      external: ["react", "react-dom"],
    },
    plugins: [honox(), build(), tailwindcss()],
  };
});
