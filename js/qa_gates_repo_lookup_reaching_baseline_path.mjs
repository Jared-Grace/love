import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function qa_gates_repo_lookup_reaching_baseline_path() {
  "Where the record of gates that can reach the which-repo-is-this-machine-pointed-at question is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "qa_gates_repo_lookup_reaching_baseline.json"]);
  return p;
}
