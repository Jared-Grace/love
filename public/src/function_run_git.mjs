import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
import { function_run_log } from "./function_run_log.mjs";
export async function function_run_git(f_name, args) {
  let result = await function_run_log(f_name, args);
  await repos_paths_map_unordered(each_folder);
  return result;
  async function each_folder(folder) {
    await git_acp_call_folder(f_name, args, folder);
  }
}
