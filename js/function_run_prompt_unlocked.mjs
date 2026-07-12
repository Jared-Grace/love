import { lock_try } from "../../love/js/lock_try.mjs";
import { function_run_prompt_line } from "../../love/js/function_run_prompt_line.mjs";
import { function_run_line_git } from "../../love/js/function_run_line_git.mjs";
export async function function_run_prompt_unlocked() {
  let line = await function_run_prompt_line();
  async function lambda2() {
  await function_run_line_git(line);}
  let r = await lock_try_prompt(lambda2, function_run_prompt_unlocked.name);
  return;
}
