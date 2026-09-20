import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_highlight_color_baseline_path() {
  arguments_assert(arguments, 0);
  ("where the record of what the pointing colours currently measure is kept. Reading it, rewriting it and refusing to let it change quietly are separate functions, so the name of the file is spelled once here rather than once in each of them.");
  let v = data_given_baselines_folder();
  let path = path_join([v, "app_code_highlight_color_baseline.json"]);
  return path;
}
