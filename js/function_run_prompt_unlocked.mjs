import { function_run_prompt_line } from "./function_run_prompt_line.mjs";
import { function_run_line_git } from "./function_run_line_git.mjs";
export async function function_run_prompt_unlocked() {
  let line = await function_run_prompt_line();
  await function_run_line_git(line);
}
