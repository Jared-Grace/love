import { process_env } from "../../../love/public/src/process_env.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let entry = process_env("lib_entry");
  let c = defineConfig({
    publicDir: false,
    build: {
      lib: {
        entry,
        name: "ViteLib",
        formats: ["iife"],
        fileName: vite_config_file_name_get,
        outDir: folder_public(),
      },
    },
  });
  return c;
}
