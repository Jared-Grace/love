import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function folders_function_named_orphaned_baseline_path() {
  "Where the record of stored-data folders already left behind by a rename is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "folders_function_named_orphaned_baseline.json",
  ]);
  return p;
}
