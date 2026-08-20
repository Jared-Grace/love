import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_replace_abbreviations_baseline_path() {
  "Where the record of explanations and rules already failing to answer to each other is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "app_replace_abbreviations_baseline.json",
  ]);
  return p;
}
