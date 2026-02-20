import { vite_path_for_config } from "../../../love/public/src/vite_path_for_config.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  const entry = {
    [app_context_initialize.name]: vite_path_for_config(app_context_initialize),
    decompress: "src/text_decompress.js",
  };
  let r = defineConfig({
    build: {
      lib: {
        entry: entry,
        name: "TextCompress",
        fileName: "text-compress",
        formats: ["iife"],
      },
    },
  });
  return r;
}
