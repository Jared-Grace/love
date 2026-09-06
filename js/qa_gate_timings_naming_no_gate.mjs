import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function qa_gate_timings_naming_no_gate(known) {
  arguments_assert(arguments, 1);
  ("The names in a record of what each gate took that no gate answers to any more.");
  ("It happens when a gate is renamed after it was timed. Nothing removes the old number, so the record keeps a name nothing will ever look up again, and the gate under its new name counts as never measured - one rename costs the record an entry twice over.");
  ("It is asked of a record handed over rather than of the file, because both the readings that want it have already read the file and neither should read it twice to be told the same thing.");
  ("The number is worth having because it does not stay small on its own. Measured on the fifth of September: four such names held ninety five seconds between them, one of them alone the third heaviest thing in the file, which is about a tenth of everything the record adds up to.");
  ("The roster is read off its own file by name rather than imported, and that reading is the only reason this waits on anything. Importing the list of gates imports every gate in it, and with them everything every gate can reach. Measured on the fifth of September, that one import was the whole path by which a way to run any command and a way to delete any named file sat inside the reach of every command that sends an app out. Those commands are not approved; they are the names the record of refusals keeps because they cannot be, and this count of stale entries was the whole of what put the command-running half of that there. Reading the names carries none of it.");
  let recorded = object_property_names(known);
  let names = await qa_gates_names();
  function gate_none(name) {
    let none = list_includes_not(names, name);
    return none;
  }
  let dead = list_filter(recorded, gate_none);
  return dead;
}
