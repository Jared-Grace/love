import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function permission_settings_local_baseline_path() {
  "the file recording which per-machine allow rules the shared list does not hold";
  let v = path_join([
    data_given_baselines_folder(),
    "permission_local_baseline.json",
  ]);
  return v;
}
