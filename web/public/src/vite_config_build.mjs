import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import { process_env_args_get } from "../../../love/public/src/process_env_args_get.mjs";
import { vite_config_define } from "../../../love/public/src/vite_config_define.mjs";
import { vite_config_out_dir } from "../../../love/public/src/vite_config_out_dir.mjs";
import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
export async function vite_config_build() {
  let process_env_get = process_env_args_get();
  let entry = process_env_get(webpack_config_entry_path);
  let name = process_env_get(vite_config_name);
  let outDir = process_env_get(vite_config_out_dir);
  let c = vite_config_define({
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
