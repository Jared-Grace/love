import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_code_above_vague_baseline_path() {
  arguments_assert(arguments, 0);
  ("Where the record of lesson lines already pointing at code with a word, instead of showing it, is kept.");
  let v = data_given_baselines_folder();
  let p = path_join([v, "app_code_above_vague_baseline.json"]);
  return p;
}
