import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import { property_invoke_get } from "../../../love/public/src/property_invoke_get.mjs";
import { process_env_args_get } from "../../../love/public/src/process_env_args_get.mjs";
import { vite_config_define } from "../../../love/public/src/vite_config_define.mjs";
import { vite_config_out_dir } from "../../../love/public/src/vite_config_out_dir.mjs";
import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
export async function vite_config_build() {
  let props = [vite_config_lib_entry, vite_config_name, vite_config_out_dir];
  let dictionary = process_env_args_get(props);
  let entry = property_invoke_get(dictionary, webpack_config_entry_path);
  let name = property_invoke_get(dictionary, vite_config_name);
  let outDir = property_invoke_get(dictionary, vite_config_out_dir);
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
