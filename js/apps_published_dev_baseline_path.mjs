import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function apps_published_dev_baseline_path() {
  "Where the record of published addresses that have no working build here is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "apps_published_dev_baseline.json"]);
  return p;
}
