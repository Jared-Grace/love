import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_names_repeated_baseline_path() {
  "Where the record of the names already saying a run of words twice running is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "functions_names_repeated_baseline.json"]);
  return p;
}
