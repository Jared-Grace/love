import { function_name_to_path_fn } from "../../../love/public/src/function_name_to_path_fn.mjs";
import { app_index_main } from "../../../love/public/src/app_index_main.mjs";
import { vite_run_command } from "../../../love/public/src/vite_run_command.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function vite_run() {
  let path = function_name_to_path_fn(app_index_main);
  const command = await vite_run_command(path);
  let stdout = await command_line(command);
  return stdout;
}
