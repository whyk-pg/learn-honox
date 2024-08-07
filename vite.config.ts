import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client({ jsxImportSource: "react" })],
      build: {
        rollupOptions: {
          input: ["./app/client.ts", "/app/style.css"],
          output: {
            entryFileNames: "static/client.js",
            chunkFileNames: "static/assets/[name]-[hash].js",
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
    };
  }
  return {
    ssr: { external: ["react", "react-dom"] },
    plugins: [
      honox({
        devServer: {
          adapter,
        },
      }),
      pages(),
    ],
  };
});
