import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_inputs_fingerprints } from "./qa_gate_inputs_fingerprints.mjs";
import { qa_gate_inputs_log_path } from "./qa_gate_inputs_log_path.mjs";
import { dev_log_add } from "./dev_log_add.mjs";
export async function qa_gate_inputs_log_add(commit, kept) {
  "$plain commit";
  "$plain kept";
  "Writes down, for one filed judgement, the word for what each traced gate read. Nothing is skipped because of it: this only collects what a skip would have decided, so that the decision can be checked against what the gates really said";
  arguments_assert(arguments, 2);
  let beside = property_get(kept, "beside");
  let inputs = await qa_gate_inputs_fingerprints(commit, beside);
  let entry = {
    commit,
    inputs,
  };
  let f_path = qa_gate_inputs_log_path();
  await dev_log_add(f_path, entry);
}
