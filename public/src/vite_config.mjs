import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { path_name } from "../../../love/public/src/path_name.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { process_env } from "../../../love/public/src/process_env.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let env_var_name = vite_config_lib_entry();
  let entry = process_env(env_var_name);
  entry = text_trim(entry);
  let name = path_name(entry);
  let r = vite_config_name();
  let c = defineConfig({
    publicDir: false,
    build: {
      emptyOutDir: false,
      lib: {
        entry,
        name,
        formats: ["iife"],
        fileName: vite_config_file_name_get,
        outDir: folder_public(),
      },
    },
  });
  return c;
}
