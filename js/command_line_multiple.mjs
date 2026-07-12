import { list_map_async } from "./list_map_async.mjs";
import { command_line } from "./command_line.mjs";
export async function command_line_multiple(commands) {
  let results = await list_map_async(commands, command_line);
  return results;
}
