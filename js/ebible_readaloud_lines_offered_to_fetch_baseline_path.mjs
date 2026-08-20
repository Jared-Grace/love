import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function ebible_readaloud_lines_offered_to_fetch_baseline_path() {
  "Where the record of bibles already known to be offered without a chapter of them having been read is kept.";
  let path = path_join([
    data_given_baselines_folder(),
    "ebible_readaloud_lines_offered_unchecked_baseline.json",
  ]);
  return path;
}
