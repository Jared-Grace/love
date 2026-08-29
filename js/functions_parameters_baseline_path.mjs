import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_parameters_baseline_path() {
  "where the functions already asking a caller to line up more things than the ceiling allows are recorded";
  let v2 = data_given_baselines_folder();
  let v = path_join([v2, "parameters_row_baseline.json"]);
  return v;
}
