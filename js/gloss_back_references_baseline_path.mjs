import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function gloss_back_references_baseline_path() {
  "Where the record of how many gloss explanations still point the reader further up is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "gloss_back_references_baseline.json",
  ]);
  return p;
}
