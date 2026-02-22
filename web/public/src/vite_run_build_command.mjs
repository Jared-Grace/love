import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { vite_config_out_dir_value } from "../../../love/public/src/vite_config_out_dir_value.mjs";
import { vite_config_out_dir } from "../../../love/public/src/vite_config_out_dir.mjs";
import { vite_config_name } from "../../../love/public/src/vite_config_name.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { command_line_text_env_vars } from "../../../love/public/src/command_line_text_env_vars.mjs";
import { file_exists_assert } from "../../../love/public/src/file_exists_assert.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run_build_command(lib_entry, name) {
  const command_parts = ["vite", "--config", path];
  command_transform(command_parts);
  let path = vite_config_path();
  await file_exists_assert(path);
  let command = list_join_space(command_parts);
  let env_vars = {
    [vite_config_lib_entry()]: lib_entry,
    [vite_config_name()]: name,
    [vite_config_out_dir()]: vite_config_out_dir_value(),
  };
  let c = command_line_text_env_vars(env_vars, command);
  return c;
  function command_transform(command_parts) {
    list_insert(command_parts, 1, "build");
  }
}
