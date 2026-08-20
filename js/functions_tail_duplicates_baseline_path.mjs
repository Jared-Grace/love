import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_tail_duplicates_baseline_path() {
  "where the record of already-shared endings is kept";
  let v = path_join([
    data_given_baselines_folder(),
    "tail_duplicates_baseline.json",
  ]);
  return v;
}
