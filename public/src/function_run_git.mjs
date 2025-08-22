import { git_acp_call } from "./git_acp_call.mjs";
import { function_run_log } from "./function_run_log.mjs";
export async function function_run_git(f_name, args) {
  let result = await function_run_log(f_name, args);
  await git_acp_call(f_name, args);
  return result;
}
