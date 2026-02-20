import { vite_path_for_config } from "../../../love/public/src/vite_path_for_config.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let joined = vite_path_for_config();
  await app_context_initialize(fn);
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
