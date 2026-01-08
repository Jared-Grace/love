import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function command_line_multiple(commands) {
  let v = await list_map_async(commands, command_line);
  return v;
}
