import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_shared_imports_baseline_path() {
  "Where the record of shared units already reaching into one app is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "app_shared_imports_baseline.json",
  ]);
  return p;
}
