import { promise_later } from "../../../love/public/src/promise_later.mjs";
import { git_acp_call_repos } from "../../../love/public/src/git_acp_call_repos.mjs";
import { function_run_log } from "../../../love/public/src/function_run_log.mjs";
Error.stackTraceLimit = Infinity;
export async function function_run_git(f_name, args) {
  let result = await function_run_log(f_name, args);
  async function lambda2() {
    await git_acp_call_repos(f_name, args);
  }
  promise_later(lambda2);
  return result;
}
