import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_head_duplicates_baseline_path() {
  "where the groups of functions already beginning with the same run of work are recorded";
  let v = path_join([
    data_given_baselines_folder(),
    "head_duplicates_baseline.json",
  ]);
  return v;
}
