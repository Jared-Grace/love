import { marker } from "../../../love/public/src/marker.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function command_line_git_multiple(commands) {
  marker("1");
  let results = await list_map_async(commands, command_line);
  return results;
}
