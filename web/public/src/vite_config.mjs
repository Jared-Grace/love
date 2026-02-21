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
        fileName: function lambda(format, entryName) {
          let r = `${entryName}.js`;
          return r;
        },
        outDir: folder_public(),
      },
    },
  });
  return c;
}
