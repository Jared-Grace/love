import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_app_specific_imports_baseline_path() {
  "Where the record of functions belonging to no app already reaching into one app is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "functions_app_specific_imports_baseline.json",
  ]);
  return p;
}
