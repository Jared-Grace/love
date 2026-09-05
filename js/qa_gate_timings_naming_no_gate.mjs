import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function qa_gate_timings_naming_no_gate(known) {
  arguments_assert(arguments, 1);
  ("The names in a record of what each gate took that no gate answers to any more.");
  ("It happens when a gate is renamed after it was timed. Nothing removes the old number, so the record keeps a name nothing will ever look up again, and the gate under its new name counts as never measured - one rename costs the record an entry twice over.");
  ("It is asked of a record handed over rather than of the file, because both the readings that want it have already read the file and neither should read it twice to be told the same thing.");
  ("The number is worth having because it does not stay small on its own. Measured on the fifth of September: four such names held ninety five seconds between them, one of them alone the third heaviest thing in the file, which is about a tenth of everything the record adds up to.");
  let recorded = object_property_names(known);
  let gates = qa_gates();
  let names = list_map_property(gates, "name");
  function gate_none(name) {
    let none = list_includes_not(names, name);
    return none;
  }
  let dead = list_filter(recorded, gate_none);
  return dead;
}
