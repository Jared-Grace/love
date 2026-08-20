import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_unreachable_statements_baseline_path() {
  "Where the never-runs ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "unreachable_statements_baseline.json",
  ]);
  return path;
}
