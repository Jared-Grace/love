import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_code_lessons_order_ahead_baseline_path() {
  arguments_assert(arguments, 0);
  ("Where the record of lessons already standing ahead of their own difficulty is kept.");
  let v = data_given_baselines_folder();
  let p = path_join([v, "app_code_lessons_order_ahead_baseline.json"]);
  return p;
}
