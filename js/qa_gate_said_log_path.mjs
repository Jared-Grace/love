import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function qa_gate_said_log_path() {
  "Where a short memory of what each red gate said, run after run, is kept";
  "In the ignored folder on purpose. What gates said once sat in the committed record for every judgement, and measured 2026-08-27 it was two thirds of everything anyone clones - so that record now lets it go after two judgements. This keeps a small slice of it for good on this one machine, which costs nobody a clone";
  let name = "qa_gate_said.jsonl";
  let f_path = folder_gitignore_join(name);
  return f_path;
}
