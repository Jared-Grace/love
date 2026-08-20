import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function qa_gates_countless_baseline_path() {
  "Where the walk-count ratchet keeps the gates that already said nothing about how much they reached. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  arguments_assert(arguments, 0);
  let path = path_join([
    data_given_baselines_folder(),
    "qa_gates_countless_baseline.json",
  ]);
  return path;
}
