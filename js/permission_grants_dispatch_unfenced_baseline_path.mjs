import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function permission_grants_dispatch_unfenced_baseline_path() {
  "Where this ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let v = data_given_baselines_folder();
  let path = path_join([
    v,
    "permission_grants_dispatch_unfenced_baseline.json",
  ]);
  return path;
}
