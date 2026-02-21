import { exit } from "../../../love/public/src/exit.mjs";
import { vite_config_out_dir } from "../../../love/public/src/vite_config_out_dir.mjs";
import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { process_env } from "../../../love/public/src/process_env.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let ev_lib_entry = vite_config_lib_entry();
  let entry = process_env(ev_lib_entry);
  entry = text_trim(entry);
  let ev_name = vite_config_name();
  let name = process_env(ev_name);
  exit();
  let c = defineConfig({
    publicDir: false,
    build: {
      emptyOutDir: false,
      outDir: vite_config_out_dir(),
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
