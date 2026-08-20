import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_work_size_baseline_path() {
  "where the functions already holding more lines of work than the ceiling allows are recorded";
  let v = path_join([data_given_baselines_folder(), "work_size_baseline.json"]);
  return v;
}
