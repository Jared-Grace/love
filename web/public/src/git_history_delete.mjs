import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function git_history_delete() {
  marker("1");
  let stdout = await command_line(command);
}
