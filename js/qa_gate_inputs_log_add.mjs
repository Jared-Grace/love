import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_inputs_log_path } from "./qa_gate_inputs_log_path.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_inputs_fingerprints } from "./qa_gate_inputs_fingerprints.mjs";
import { text_slice } from "./text_slice.mjs";
import { dev_log_add } from "./dev_log_add.mjs";
export async function qa_gate_inputs_log_add(commit, kept) {
  "$plain commit";
  "$plain kept";
  "Writes down, for one filed judgement, the word for what each traced gate read. Nothing is skipped because of it: this only collects what a skip would have decided, so that the decision can be checked against what the gates really said";
  arguments_assert(arguments, 2);
  ("A failure is written down in the row rather than dropped. The filing above this swallows anything thrown, rightly, because a side note must not cost a judgement - but this row is evidence, and a log that merely stops growing looks the same as one with nothing to say");
  let f_path = qa_gate_inputs_log_path();
  let entry = {
    commit,
  };
  try {
    let beside = property_get(kept, "beside");
    entry.inputs = await qa_gate_inputs_fingerprints(commit, beside);
  } catch (e) {
    let s = String(e && e.stack);
    entry.failed = text_slice(s, 0, 1500);
  }
  await dev_log_add(f_path, entry);
}
