import { command_line } from "../../../love/public/src/command_line.mjs";
export async function command_line_schtasks(command) {
  let prefixed = `schtasks ` + command;
  let stdout = await command_line(prefixed);
  return stdout;
}
