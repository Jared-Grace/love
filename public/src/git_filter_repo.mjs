import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function git_filter_repo(command) {
  marker("1");
  return await command_line(command);
}
