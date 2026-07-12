import { path_name } from "./path_name.mjs";
import { log_keep } from "./log_keep.mjs";
import { command_line } from "./command_line.mjs";
import { vite_run_build_command } from "./vite_run_build_command.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function vite_run_build_fn(f_name) {
  let path = function_name_to_path(f_name);
  let name = path_name(path);
  let command = await vite_run_build_command(path, name);
  log_keep(vite_run_build_fn.name, command);
  let stdout = await command_line(command);
  return stdout;
}
