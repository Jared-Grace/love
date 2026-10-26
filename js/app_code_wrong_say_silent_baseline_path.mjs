import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_code_wrong_say_silent_baseline_path() {
  "Where the record of code lessons already saying nothing when a wrong output is picked is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "app_code_wrong_say_silent_baseline.json"]);
  return p;
}
