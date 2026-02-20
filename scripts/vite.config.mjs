import { defineConfig } from "vite";
import { function_name_to_path } from '../public/src/function_name_to_path.mjs';
function_name_to_path()
export default defineConfig({
  build: {
    lib: {
      entry: {
        compress: "src/text_compress.js",
        decompress: "src/text_decompress.js"
      },
      name: "TextCompress",
      fileName: "text-compress",
      formats: ["iife"]
    }
  }
});