import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { command_line_text_env_vars } from "../../../love/public/src/command_line_text_env_vars.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { file_exists_assert } from "../../../love/public/src/file_exists_assert.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run_command(lib_entry, name) {
  let path = vite_config_path();
  await file_exists_assert(path);
  let command = text_combine_multiple(["vite build --config ", path]);
  let env_var_name = vite_config_lib_entry();
  let env_vars = {
    [env_var_name]: lib_entry,
  };
  let c = command_line_text_env_vars(env_vars, command);
  return c;
}
