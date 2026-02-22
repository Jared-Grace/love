import { vite_config_out_dir } from "../../../love/public/src/vite_config_out_dir.mjs";
import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
export async function vite_config() {
  let ev_lib_entry = vite_config_lib_entry();
  let entry = process_env_trim(ev_lib_entry);
  let ev_name = vite_config_name();
  let name = process_env_trim(ev_name);
  let ev_out_dir = vite_config_out_dir();
  let outDir = process_env_trim(ev_out_dir);
  let c = defineConfig({
    publicDir: false,
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env": {},
      process: {},
    },
    build: {
      emptyOutDir: false,
      outDir,
      lib: {
        entry,
        name,
        formats: ["iife"],
        fileName: vite_config_file_name_get,
      },
    },
  });
  return c;
}
