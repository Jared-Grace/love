import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/compress.js",
      name: "TextCompress",
      fileName: "text-compress",
      formats: ["iife"]
    }
  }
});