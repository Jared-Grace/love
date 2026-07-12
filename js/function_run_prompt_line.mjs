import { function_run_prompt_repo_name_colored } from "./function_run_prompt_repo_name_colored.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
import { chalk_green } from "./chalk_green.mjs";
import { command_line_read } from "./command_line_read.mjs";
export async function function_run_prompt_line() {
  let repo_name = await user_repo_get();
  let prompt_colored = await chalk_green("✟ ");
  let colored = await function_run_prompt_repo_name_colored(repo_name);
  let combined = text_combine_multiple([prompt_colored, colored, " "]);
  let line = await command_line_read(combined);
  return line;
}
