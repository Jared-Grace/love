import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function browser_secure_context_baseline_path() {
  "Where the ratchet on reaching for the browser's https-only things keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "browser_secure_context_baseline.json",
  ]);
  return path;
}
