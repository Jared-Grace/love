import { vite_run_command } from "./vite_run_command.mjs";
import { log_keep } from "./log_keep.mjs";
import { command_line_stdout } from "./command_line_stdout.mjs";
export async function vite_run() {
  let command = await vite_run_command();
  log_keep(vite_run.name, command);
  let stdout = await command_line_stdout(command);
  return stdout;
}
