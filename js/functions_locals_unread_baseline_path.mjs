import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_locals_unread_baseline_path() {
  "where the names already bound and never read are recorded";
  let v = path_join([
    data_given_baselines_folder(),
    "locals_unread_baseline.json",
  ]);
  return v;
}
