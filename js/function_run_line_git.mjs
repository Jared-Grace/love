import { property_get } from "../../love/js/property_get.mjs";
import { function_run_line_git_before } from "../../love/js/function_run_line_git_before.mjs";
import { git_acp_call_repos_unawait } from "../../love/js/git_acp_call_repos_unawait.mjs";
Error.stackTraceLimit = Infinity;
export async function function_run_line_git(line) {
  let r = await function_run_line_git_before(line);
  let args = property_get(r, "args");
  let f_name = property_get(r, "f_name");
  let result = property_get(r, "result");
  return result;
  git_acp_call_repos_unawait(f_name, args);
}
