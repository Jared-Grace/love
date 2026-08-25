import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function apps_node_only_carried_baseline_path() {
  "Where the carried-but-unrunnable ratchet keeps what the bundles already held. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "apps_node_only_carried_baseline.json",
  ]);
  return path;
}
