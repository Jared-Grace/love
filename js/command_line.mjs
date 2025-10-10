import { marker } from "../../../love/public/src/marker.mjs";
import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
export async function command_line(command) {
  marker("1");
  let extra = {};
  const stdout = await command_line_generic(command, extra);
  return stdout;
}
