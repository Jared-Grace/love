import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function functions_return_key_shapes_baseline_path() {
  arguments_assert(arguments, 0);
  ("Where the ratchet on disagreeing return shapes keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.");
  let v = data_given_baselines_folder();
  let path = path_join([v, "return_key_shapes_baseline.json"]);
  return path;
}
