import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function public_chunks_orphaned_baseline_path() {
  "Where the leftover-script ratchet keeps the ones the folders were already carrying. Reading it, rewriting it and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  arguments_assert(arguments, 0);
  let v = data_given_baselines_folder();
  let path = path_join([v, "public_chunks_orphaned_baseline.json"]);
  return path;
}
