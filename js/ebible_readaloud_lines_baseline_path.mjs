import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function ebible_readaloud_lines_baseline_path() {
  "Where the record of chapters already known to be read aloud in a different number of lines from the number of verses their pages mark is kept.";
  let path = path_join([
    data_given_baselines_folder(),
    "ebible_readaloud_lines_baseline.json",
  ]);
  return path;
}
