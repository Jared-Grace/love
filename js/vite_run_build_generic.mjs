import { command_line_text_env_vars } from "./command_line_text_env_vars.mjs";
import { vite_config_out_dir_value } from "./vite_config_out_dir_value.mjs";
import { vite_config_out_dir } from "./vite_config_out_dir.mjs";
import { vite_config_name } from "./vite_config_name.mjs";
import { vite_config_lib_entry } from "./vite_config_lib_entry.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { file_exists_assert_json } from "./file_exists_assert_json.mjs";
import { vite_config_path } from "./vite_config_path.mjs";
export async function vite_run_build_generic(
  command_transform,
  lib_entry,
  name,
) {
  let path = vite_config_path();
  let command_parts = ["vite", "--config", path];
  command_transform(command_parts);
  await file_exists_assert_json(path, {
    hint: "the vite config file should exist to run the build — was it generated first?",
  });
  let command = list_join_space(command_parts);
  let env_vars = {
    [vite_config_lib_entry()]: lib_entry,
    [vite_config_name()]: name,
    [vite_config_out_dir()]: vite_config_out_dir_value(),
  };
  let c = command_line_text_env_vars(env_vars, command);
  return c;
}
