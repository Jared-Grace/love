import { list_take } from "../../love/js/list_take.mjs";
import { function_run_prompt_line } from "../../love/js/function_run_prompt_line.mjs";
import { function_run_line_git } from "../../love/js/function_run_line_git.mjs";
export async function function_run_prompt_unlocked() {
  let line = await function_run_prompt_line();
  let taken = list_take(list, count);
  await function_run_line_git(line);
}
