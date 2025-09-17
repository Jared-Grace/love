import { marker } from "./marker.mjs";
import { command_line_generic } from "./command_line_generic.mjs";
export async function command_line(command) {
  marker("1");
  let extra = {};
  const stdout = await command_line_generic(command, extra);
  return stdout;
}
