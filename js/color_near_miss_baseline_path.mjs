import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function color_near_miss_baseline_path() {
  "where the colour ratchet keeps the near misses the repo already carried. Reading it, rewriting it and refusing to grow it are separate functions, so the name of the file is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "color_near_miss_baseline.json",
  ]);
  return path;
}
