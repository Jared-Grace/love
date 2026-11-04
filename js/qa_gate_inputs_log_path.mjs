import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function qa_gate_inputs_log_path() {
  "Where, for each filed judgement, the short word for everything each traced gate read is kept. Beside the log of what gates said and read together with it, and in the ignored folder for the same reason";
  let name = "qa_gate_inputs.jsonl";
  let f_path = folder_gitignore_join(name);
  return f_path;
}
