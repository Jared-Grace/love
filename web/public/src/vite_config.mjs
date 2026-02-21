import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { app_index_main } from "../../../love/public/src/app_index_main.mjs";
import { function_name_to_path_fn } from "../../../love/public/src/function_name_to_path_fn.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let path = function_name_to_path_fn(app_index_main);
  let c = defineConfig({
    publicDir: false,
    build: {
      lib: {
        entry: path,
        name: "ViteLib",
        formats: ["iife"],
        fileName: vite_config_file_name_get,
        outDir: folder_public(),
      },
    },
  });
  return c;
}
