import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { repo_path } from "./repo_path.mjs";
import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
import { repos_names } from "./repos_names.mjs";
import { function_run_log } from "./function_run_log.mjs";
export async function function_run_git(f_name, args) {
  let result = await function_run_log(f_name, args);
  let all = await repos_names();
  async function lambda(repo_name) {
    let folder = repo_path(repo_name);
    await each_folder(folder);
  }
  await list_map_unordered_async(all, lambda);
  return result;
  async function each_folder(folder) {
    await git_acp_call_folder(f_name, args, folder);
  }
}
