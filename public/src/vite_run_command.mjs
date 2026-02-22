import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { vite_config_out_dir_value } from "../../../love/public/src/vite_config_out_dir_value.mjs";
import { vite_config_out_dir } from "../../../love/public/src/vite_config_out_dir.mjs";
import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { command_line_text_env_vars } from "../../../love/public/src/command_line_text_env_vars.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { file_exists_assert } from "../../../love/public/src/file_exists_assert.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run_command(lib_entry, name) {
  let path = vite_config_path();
  await file_exists_assert(path);
  let joined = list_join_space(list);
  let command = text_combine_multiple(["vite build --config ", path]);
  let env_vars = {
    [vite_config_lib_entry()]: lib_entry,
    [vite_config_name()]: name,
    [vite_config_out_dir()]: vite_config_out_dir_value(),
  };
  let c = command_line_text_env_vars(env_vars, command);
  return c;
}
