import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function gloss_pointers_dangling_baseline_path() {
  "Where the record of how often each gloss store sends the reader back to a word met earlier and finds nothing there is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "gloss_pointers_dangling_baseline.json"]);
  return p;
}
