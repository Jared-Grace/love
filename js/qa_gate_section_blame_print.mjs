import { qa_gate_history_blind_print } from "./qa_gate_history_blind_print.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_blame_print } from "./qa_gate_blame_print.mjs";
export async function qa_gate_section_blame_print(section, known) {
  arguments_assert(arguments, 2);
  ("Prints who last touched each thing one gate named, under a heading saying which gate named them, and gives back the ones nobody has committed yet.");
  ("The gate whose question is about the history is marked here too. Such a gate goes red inside the frozen copy, which is made without any history on purpose, and goes quiet when asked out here - which reads as a tear in the copy rather than as the gate needing what the copy does not carry, and read that way it comes back on every run forever.");
  ("Only the names still in flight come back. They are wanted all together at the end rather than gate by gate, because one uncommitted file is usually why several gates went red at once and saying so once is the whole of the news.");
  let name = property_get(section, "name");
  let said = property_get(section, "said");
  console.log("\n=== who last touched what " + name + " named ===");
  let some = await qa_gate_blame_print(said, known);
  qa_gate_history_blind_print(name, said);
  return some;
}
