import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function qa_gates_said_plain_baseline_path() {
  "Where the plain-spoken-gate ratchet keeps the gates that already could not name their offenders machine-readably. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "qa_gates_said_plain_baseline.json",
  ]);
  return path;
}
