import { log_keep } from "./log_keep.mjs";
import { command_line } from "./command_line.mjs";
import { text_combine } from "./text_combine.mjs";
export async function command_line_log(command) {
  log_keep(command_line_log.name, text_combine("running: ", command));
  let stdout = await command_line(command);
  return stdout;
}
