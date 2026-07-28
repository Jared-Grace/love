import { chalk_green_or_red_bg } from "./chalk_green_or_red_bg.mjs";
import { list_includes } from "./list_includes.mjs";
export async function function_run_prompt_repo_name_colored(repo_name) {
  let safe = ["p_np"];
  ("this will make repos not in safe stand out in prompt visually");
  let includes = list_includes(safe, repo_name);
  let chalk_color_fn = chalk_green_or_red_bg(includes);
  let colored = await chalk_color_fn(repo_name);
  return colored;
}
