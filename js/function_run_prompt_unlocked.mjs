import { git_ac_call_repos_unawait } from "./git_ac_call_repos_unawait.mjs";
import { property_get } from "./property_get.mjs";
import { function_run_line_history } from "./function_run_line_history.mjs";
import { lock_try_prompt } from "./lock_try_prompt.mjs";
import { function_run_prompt_line } from "./function_run_prompt_line.mjs";
export async function function_run_prompt_unlocked() {
  let line = await function_run_prompt_line();
  let r2 = await function_run_line_history(line);
  let args = property_get(r2, "args");
  let f_name = property_get(r2, "f_name");
  let result = property_get(r2, "result");
  async function lambda2() {
    git_ac_call_repos_unawait(f_name, args);
  }
  await lock_try_prompt(lambda2, function_run_prompt_unlocked.name);
  return result;
}
