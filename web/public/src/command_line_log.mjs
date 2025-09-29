import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function command_line_log(command) {
  log_keep("running: " + command);
  let stdout = await command_line(command);
  return stdout;
}
