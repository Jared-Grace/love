import { log_keep } from "./log_keep.mjs";
import { command_line } from "./command_line.mjs";
export async function command_line_log(command) {
  log_keep("running: " + command);
  let stdout = await command_line(command);
  return stdout;
}
