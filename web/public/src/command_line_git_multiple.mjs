import { command_line_git_current } from "../../../love/public/src/command_line_git_current.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
export async function command_line_git_multiple(commands) {
  let results = await list_map_async(commands, command_line_git_current);
  return results;
}
