import { defineConfig } from "vite";
export function vite_config() {
  let r = defineConfig({
    build: {
      lib: {
        entry: {
          compress: "src/text_compress.js",
          decompress: "src/text_decompress.js",
        },
        name: "TextCompress",
        fileName: "text-compress",
        formats: ["iife"],
      },
    },
  });
  return r;
}
