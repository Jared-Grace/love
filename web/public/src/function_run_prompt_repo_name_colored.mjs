import { chalk_green_or_red } from "../../../love/public/src/chalk_green_or_red.mjs";
import { chalk_color } from "../../../love/public/src/chalk_color.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export async function function_run_prompt_repo_name_colored(repo_name) {
  let safe = ["p_np"];
  let includes = list_includes(safe, repo_name);
  let chalk_color = chalk_green_or_red(includes);
  let colored = await chalk_color(repo_name);
  return colored;
}
