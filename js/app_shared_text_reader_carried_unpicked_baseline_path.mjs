import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_shared_text_reader_carried_unpicked_baseline_path() {
  "Where the carried-words ratchet keeps the functions the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let v = data_given_baselines_folder();
  let path = path_join([
    v,
    "app_shared_text_reader_carried_unpicked_baseline.json",
  ]);
  return path;
}
