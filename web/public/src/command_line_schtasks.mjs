import { command_line } from "../../../love/public/src/command_line.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function command_line_schtasks(command) {
  let prefixed = text_combine("schtasks ", command);
  let stdout = await command_line(prefixed);
  return stdout;
}
