import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
import { vite_config_out_dir_value } from "../../../love/public/src/vite_config_out_dir_value.mjs";
import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let ev_lib_entry = vite_config_lib_entry();
  let entry = process_env_trim(ev_lib_entry);
  let ev_name = vite_config_name();
  let name = process_env_trim(ev_name);
  let c = defineConfig({
    publicDir: false,
    build: {
      emptyOutDir: false,
      outDir: vite_config_out_dir_value(),
      lib: {
        entry,
        name: name,
        formats: ["iife"],
        fileName: vite_config_file_name_get,
      },
    },
  });
  return c;
}
