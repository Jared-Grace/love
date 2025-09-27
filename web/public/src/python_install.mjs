import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function python_install(command) {
  marker("1");
  return await command_line(command);
}
