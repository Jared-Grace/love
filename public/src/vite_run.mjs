import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { vite_run_command } from "../../../love/public/src/vite_run_command.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function vite_run() {
  let parts = function_name_to_parts(f_name);
  const command = await vite_run_command(lib_entry);
  let stdout = await command_line(command);
  return stdout;
}
