import { log_error } from "./log_error.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { data_property_get } from "./data_property_get.mjs";
import { chalk_green } from "./chalk_green.mjs";
import { function_run_line_git } from "./function_run_line_git.mjs";
import { command_line_read } from "./command_line_read.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function function_run_prompt() {
  let ea = await data_property_get("error_attention");
  let nn = null_not_is(ea);
  if (nn) {
    let prompt = json_format_to(ea);
    await log_error(prompt);
  }
  let prompt_colored = await chalk_green("✟ ");
  let line = await command_line_read(prompt_colored);
  await function_run_line_git(line);
}
