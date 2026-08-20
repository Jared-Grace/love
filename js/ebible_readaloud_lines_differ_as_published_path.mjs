import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function ebible_readaloud_lines_differ_as_published_path() {
  "Where the record of chapters proved to be read aloud in a different number of lines from the number of verses their pages mark because that is how they were published is kept.";
  let v = data_given_baselines_folder();
  let path = path_join([v, "ebible_readaloud_lines_differ_as_published.json"]);
  return path;
}
