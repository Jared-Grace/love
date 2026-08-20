import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_parameters_unread_baseline_path() {
  "Where the unread-parameter ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let v = path_join([
    data_given_baselines_folder(),
    "parameters_unread_baseline.json",
  ]);
  return v;
}
