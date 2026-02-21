import { command_line } from "../../../love/public/src/command_line.mjs";
import { vite_run_command } from "../../../love/public/src/vite_run_command.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
export async function vite_run_fn(f_name) {
  let path = function_name_to_path(f_name);
  const command = await vite_run_command(path);
  let stdout = await command_line(command);
  return stdout;
}
