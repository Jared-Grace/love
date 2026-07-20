import { command_line_stdout } from "./command_line_stdout.mjs";
import { text_combine } from "./text_combine.mjs";
export async function command_line_schtasks(command) {
  let prefixed = text_combine("schtasks ", command);
  let stdout = await command_line_stdout(prefixed);
  return stdout;
}
