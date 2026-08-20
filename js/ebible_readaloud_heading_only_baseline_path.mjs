import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function ebible_readaloud_heading_only_baseline_path() {
  "Where the record of chapters already known to be published for reading aloud as a heading and nothing else is kept.";
  let v = data_given_baselines_folder();
  let path = path_join([v, "ebible_readaloud_heading_only_baseline.json"]);
  return path;
}
