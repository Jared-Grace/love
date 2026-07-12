import { git_acp_call_repos_unawait } from "../../love/js/git_acp_call_repos_unawait.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { function_run_line_history } from "../../love/js/function_run_line_history.mjs";
import { lock_try_prompt } from "../../love/js/lock_try_prompt.mjs";
import { function_run_prompt_line } from "../../love/js/function_run_prompt_line.mjs";
export async function function_run_prompt_unlocked() {
  let line = await function_run_prompt_line();
  let r2 = await function_run_line_history(line);
  let args = property_get(r2, "args");
  let f_name = property_get(r2, "f_name");
  let result = property_get(r2, "result");
  async function lambda2() {
    git_acp_call_repos_unawait(f_name, args);
  }
  let r = await lock_try_prompt(lambda2, function_run_prompt_unlocked.name);
  return result;
}
