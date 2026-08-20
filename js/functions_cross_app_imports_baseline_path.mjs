import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_cross_app_imports_baseline_path() {
  "Where the record of one app already reaching into another is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "functions_cross_app_imports_baseline.json",
  ]);
  return p;
}
