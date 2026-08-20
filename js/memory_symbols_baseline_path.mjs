import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function memory_symbols_baseline_path() {
  "Where the memory-symbol ratchet keeps the names already written down. Reading it, rewriting it and comparing against it are separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "memory_symbols_baseline.json",
  ]);
  return path;
}
