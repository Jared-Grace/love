import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function ebible_versions_english_readaloud_baseline_path() {
  "Where the record of English bibles already known to have no read-aloud edition on this disk is kept.";
  "It is meant to hold nothing. A name in here is a bible the search index walks and reads nothing out of, so the list is a tally of what the search is quietly missing rather than a set of settled exceptions.";
  let v = data_given_baselines_folder();
  let path = path_join([v, "ebible_versions_english_readaloud_baseline.json"]);
  return path;
}
