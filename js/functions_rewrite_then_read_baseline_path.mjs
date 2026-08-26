import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function functions_rewrite_then_read_baseline_path() {
  "Where the stale-read ratchet keeps the names the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let folder = data_given_baselines_folder();
  let path = path_join([folder, "functions_rewrite_then_read_baseline.json"]);
  return path;
}
