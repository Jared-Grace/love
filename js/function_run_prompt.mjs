import { function_run_prompt_lock } from "./function_run_prompt_lock.mjs";
import { function_run_prompt_line } from "./function_run_prompt_line.mjs";
import { log_error } from "./log_error.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { data_property_get_generic } from "./data_property_get_generic.mjs";
import { function_run_line_git } from "./function_run_line_git.mjs";
import { data_path } from "./data_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function function_run_prompt() {
  let line = await function_run_prompt_line();
  async function lambda() {
    await function_run_line_git(line);
  }
  let r = await function_run_prompt_lock(lambda);
}

