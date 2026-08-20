import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_code_quiz_leniency_baseline_path() {
  "Where the record of lessons already passable by reading the right answer off the code is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "app_code_quiz_leniency_baseline.json",
  ]);
  return p;
}
