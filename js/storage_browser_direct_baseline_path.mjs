import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function storage_browser_direct_baseline_path() {
  "Where the ratchet on files speaking straight to the browser's stores keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "storage_browser_direct_baseline.json",
  ]);
  return path;
}
