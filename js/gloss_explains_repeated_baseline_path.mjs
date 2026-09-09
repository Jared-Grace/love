import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function gloss_explains_repeated_baseline_path() {
  "Where the record of how many gloss explanations were handed to a word some other word in the same chapter had already been given word for word is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "gloss_explains_repeated_baseline.json"]);
  return p;
}
