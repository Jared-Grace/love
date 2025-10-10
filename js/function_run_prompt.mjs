import { log_error } from "../../../love/public/src/log_error.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
import { chalk_green } from "../../../love/public/src/chalk_green.mjs";
import { function_run_line_git } from "../../../love/public/src/function_run_line_git.mjs";
import { command_line_read } from "../../../love/public/src/command_line_read.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
export async function function_run_prompt() {
  const property_name = "error_attention";
  let d_path = data_path();
  let ea = await data_property_get(property_name, d_path);
  let nn = null_not_is(ea);
  if (nn) {
    await log_error(property_name);
    let prompt = json_format_to(ea);
    await log_error(prompt);
  }
  let prompt_colored = await chalk_green("✟ ");
  let line = await command_line_read(prompt_colored);
  await function_run_line_git(line);
}
