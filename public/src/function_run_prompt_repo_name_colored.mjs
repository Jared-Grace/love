import { chalk_red } from "../../../love/public/src/chalk_red.mjs";
import { chalk_green } from "../../../love/public/src/chalk_green.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { chalk_color } from "../../../love/public/src/chalk_color.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export async function function_run_prompt_repo_name_colored(repo_name) {
  let safe = ["p_np"];
  let includes = list_includes(safe, repo_name);
  let chalk_color = ternary(includes, chalk_green, chalk_red);
  let colored = await chalk_color(repo_name);
  return colored;
}
