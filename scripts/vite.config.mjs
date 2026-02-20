import { defineConfig } from "vite";

import { function_name_to_path } from '../public/src/function_name_to_path.mjs';
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