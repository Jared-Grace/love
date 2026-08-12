import { qa_gate_section_blame_print } from "./qa_gate_section_blame_print.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { qa_gate_in_flight_print } from "./qa_gate_in_flight_print.mjs";
export async function qa_gate_sections_blame_print(told) {
  arguments_assert(arguments, 1);
  ("Prints, for everything the gates complained about, who last touched each thing named - and marks the two kinds of complaint that a plain list of names would read wrongly.");
  ("It is asked out in the living folder rather than in the frozen copy. The copy is made without any history on purpose, so in there the question has no answer at all, and what comes back instead is an empty one - which reads exactly like nobody being at fault.");
  ("Everything a gate printed is looked at, not only the sentence it threw. A gate that finds eight faults prints the eight and throws a count, so the sentence on its own names nobody.");
  ("Nothing is printed and nothing is asked when the gates complained about nothing, so the walk over the history is not paid for on a clean run.");
  let sections = property_get(told, "sections");
  let any = list_size_greater_than(sections, 0);
  if (any) {
    let known = await functions_names();
    let flying = [];
    for (let section of sections) {
      let some = await qa_gate_section_blame_print(section, known);
      list_add_multiple(flying, some);
    }
    qa_gate_in_flight_print(flying);
  }
}
