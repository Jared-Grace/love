import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_name_word_repeated_baseline_path() {
  "where the doubled-word ratchet keeps the names the repo already carried. Reading it, rewriting it and refusing to grow it are separate functions, so the name of the file is spelled once here rather than once in each of them.";
  let v = data_given_baselines_folder();
  let path = path_join([v, "functions_name_word_repeated_baseline.json"]);
  return path;
}
