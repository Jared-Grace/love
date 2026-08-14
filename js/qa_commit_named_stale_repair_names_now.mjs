import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_said_advice_remove } from "./qa_gate_said_advice_remove.mjs";
import { qa_gate_said_reached_remove } from "./qa_gate_said_reached_remove.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
export function qa_commit_named_stale_repair_names_now(said, known) {
  "Two things a gate says are not accusations, and both are taken out before any name is read back: the advice it offers for repairing the fault, and the far half of each arrow, which names what the offender reached rather than who reached it.";
  arguments_assert(arguments, 2);
  let advised = qa_gate_said_advice_remove(said);
  let accused = qa_gate_said_reached_remove(advised);
  let names = functions_names_in_text(accused, known);
  return names;
}
