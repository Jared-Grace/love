import { vite_run_command } from "../../../love/public/src/vite_run_command.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function vite_run(lib_entry) {
  const command = await vite_run_command(lib_entry);
  let stdout = await command_line(command);
  return stdout;
}
