import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function ebible_languages_licences_baseline_path() {
  "Where the record of translations already offered on terms this repo may not ship is kept.";
  let p = path_join([
    data_given_baselines_folder(),
    "ebible_languages_licences_baseline.json",
  ]);
  return p;
}
