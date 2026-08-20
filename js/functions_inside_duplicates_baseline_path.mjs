import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_inside_duplicates_baseline_path() {
  "where the groups of functions already sharing a run of work somewhere inside them are recorded";
  let v = path_join([
    data_given_baselines_folder(),
    "inside_duplicates_baseline.json",
  ]);
  return v;
}
