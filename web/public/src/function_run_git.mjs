import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
import { each_async } from "./each_async.mjs";
import { repos } from "./repos.mjs";
import { function_run_log } from "./function_run_log.mjs";
export async function function_run_git(f_name, args) {
  let result = await function_run_log(f_name, args);
  let all = await repos();
  async function lambda(item) {
    await git_acp_call_folder(f_name, args, folder);
  }
  await each_async(all, lambda);
  return result;
}
