import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
export async function command_line_git_multiple(commands) {
  let results = await list_map_async(commands, command_line_git);
  return results;
}
