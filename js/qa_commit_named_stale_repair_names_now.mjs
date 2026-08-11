import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_said_advice_remove } from "./qa_gate_said_advice_remove.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
export function qa_commit_named_stale_repair_names_now(said, known) {
  arguments_assert(arguments, 2);
  let accused = qa_gate_said_advice_remove(said);
  let names = functions_names_in_text(accused, known);
  return names;
}
