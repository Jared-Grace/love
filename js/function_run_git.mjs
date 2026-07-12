import { git_acp_call_repos_unawait } from "./git_acp_call_repos_unawait.mjs";
import { function_run_log } from "./function_run_log.mjs";
Error.stackTraceLimit = Infinity;
export async function function_run_git(f_name, args) {
  let result = await function_run_log(f_name, args);
  return result;
  git_acp_call_repos_unawait(f_name, args);
}
