import { defineConfig } from "vite";
import { function_name_to_path } from '../public/src/function_name_to_path.mjs';
import { app_context_initialize } from '../public/src/app_context_initialize.mjs';
function_name_to_path(app_context_initialize.name)
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