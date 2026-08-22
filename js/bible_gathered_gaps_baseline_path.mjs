import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function bible_gathered_gaps_baseline_path() {
  "Where the record of holes the gathered corpus already has is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "bible_gathered_gaps_baseline.json"]);
  return p;
}
