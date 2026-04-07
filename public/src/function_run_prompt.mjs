import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { chalk_color } from "../../../love/public/src/chalk_color.mjs";
import { chalk_red } from "../../../love/public/src/chalk_red.mjs";
import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { log_error } from "../../../love/public/src/log_error.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
import { chalk_green } from "../../../love/public/src/chalk_green.mjs";
import { function_run_line_git } from "../../../love/public/src/function_run_line_git.mjs";
import { command_line_read } from "../../../love/public/src/command_line_read.mjs";
import { json_format_to_truncated } from "../../../love/public/src/json_format_to_truncated.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { ternary } from "./ternary.mjs";
export async function function_run_prompt() {
  if (false) {
    const property_name = "error_attention";
    let d_path = data_path();
    let ea = await data_property_get_generic(d_path, property_name);
    let nn = null_not_is(ea);
    if (nn) {
      await log_error(property_name);
      let prompt = json_format_to_truncated(ea);
      await log_error(prompt);
    }
  }
  let repo_name = await user_repo_get();
  let prompt_colored = await chalk_green("✟ ");
  let safe = ["p_np"];
  let includes = list_includes(safe, repo_name);
  let chalk_color = ternary(includes, chalk_green, chalk_red);
  let colored = await chalk_color(repo_name);
  let combined = text_combine_multiple(["✟ ", prompt_colored, colored, " "]);
  let line = await command_line_read(combined);
  await function_run_line_git(line);
}
