import { property_get } from "./property_get.mjs";
import { function_run_line_history } from "./function_run_line_history.mjs";
import { git_ac_call_repos_unawait } from "./git_ac_call_repos_unawait.mjs";
Error.stackTraceLimit = Infinity;
export async function function_run_line_git(line) {
  let r = await function_run_line_history(line);
  let args = property_get(r, "args");
  let f_name = property_get(r, "f_name");
  let result = property_get(r, "result");
  git_ac_call_repos_unawait(f_name, args);
  return result;
}
