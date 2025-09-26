import { command_line } from "./command_line.mjs";
import { log } from "./log.mjs";
export async function command_line_log(command) {
  log("running: " + command);
  let stdout = await command_line(command);
  return stdout;
}
