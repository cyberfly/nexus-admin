import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { readFileSync, readdirSync } from "fs";
import { resolve } from "path";

// Get all HTML files in the root directory
const htmlFiles = readdirSync(__dirname).filter((file) =>
  file.endsWith(".html")
);

// Load components
const head = readFileSync(
  resolve(__dirname, "src/components/head.html"),
  "utf-8"
);
const header = readFileSync(
  resolve(__dirname, "src/components/header.html"),
  "utf-8"
);
const sidebar = readFileSync(
  resolve(__dirname, "src/components/sidebar.html"),
  "utf-8"
);

// Generate pages configuration for each HTML file
const pages = htmlFiles.map((file) => ({
  filename: file,
  template: file,
  injectOptions: {
    data: {
      head,
      header,
      sidebar,
    },
  },
}));

const isMinify = process.env.BUILD_MINIFY !== "false";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: isMinify,
      pages: pages,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: isMinify,
  },
});
