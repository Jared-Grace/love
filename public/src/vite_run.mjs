import { vite_run_command } from "../../../love/public/src/vite_run_command.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function vite_run() {
  const command = await vite_run_command(path, name);
  log_keep(command);
  let stdout = await command_line(command);
  return stdout;
}
