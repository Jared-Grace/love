import { function_run_prompt_repo_name_colored } from "./function_run_prompt_repo_name_colored.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
import { chalk_green } from "./chalk_green.mjs";
import { function_run_line_git } from "./function_run_line_git.mjs";
import { command_line_read } from "./command_line_read.mjs";
export async function function_run_prompt_unlocked() {
  let line = await function_run_prompt_line();
  await function_run_line_git(line);
}
