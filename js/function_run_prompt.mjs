import { function_run_prompt_lock } from "./function_run_prompt_lock.mjs";
import { function_run_prompt_line } from "./function_run_prompt_line.mjs";
import { function_run_line_git } from "./function_run_line_git.mjs";
export async function function_run_prompt() {
  let line = await function_run_prompt_line();
  async function lambda() {
    await function_run_line_git(line);
  }
  let r = await function_run_prompt_lock(lambda);
}
