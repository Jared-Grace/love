import { function_run_prompt_lock } from "./function_run_prompt_lock.mjs";
import { function_run_prompt_repo_name_colored } from "./function_run_prompt_repo_name_colored.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
import { log_error } from "./log_error.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { data_property_get_generic } from "./data_property_get_generic.mjs";
import { chalk_green } from "./chalk_green.mjs";
import { function_run_line_git } from "./function_run_line_git.mjs";
import { command_line_read } from "./command_line_read.mjs";
import { data_path } from "./data_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function function_run_prompt() {
  if (false) {
    let property_name = "error_attention";
    let d_path = data_path();
    let ea = await data_property_get_generic(d_path, property_name);
    let nn = null_not_is(ea);
    if (nn) {
      await log_error(property_name);
      let prompt = json_format_to(ea);
      await log_error(prompt);
    }
  }
  let repo_name = await user_repo_get();
  let prompt_colored = await chalk_green("✟ ");
  let colored = await function_run_prompt_repo_name_colored(repo_name);
  let combined = text_combine_multiple([prompt_colored, colored, " "]);
  let line = await command_line_read(combined);
  async function lambda() {
    await function_run_line_git(line);
  }
  let r = await function_run_prompt_lock(lambda);
}
