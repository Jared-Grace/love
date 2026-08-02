import { qa_gates_names } from "./qa_gates_names.mjs";
import { functions_names_ending_found_assert } from "./functions_names_ending_found_assert.mjs";
import { functions_names_in_flight_without } from "./functions_names_in_flight_without.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { functions_gate_run_unwired_exempt } from "./functions_gate_run_unwired_exempt.mjs";
export async function functions_gate_run_unwired() {
  "The gates this repo has written and never listed, so nothing ever runs them.";
  "A gate is a function whose name ends in the two words the whole-repo gate's own members end in, and it is run by being a member of that list and by nothing else. So a gate that was written, tested by hand once, and never added is not a weak gate - it is a gate that has never run, and it reads exactly like the ones that do: same name, same shape, green when you call it.";
  "This is the quiet half of a check the repo already makes in the other direction. An orphaned corpus is caught because a corpus with nobody reading it is easy to spot from the corpus. A gate nobody runs cannot be spotted from the gate at all - only from the list.";
  "Refused when no gate is found at all, because this hands back a subtraction and an empty left side gives the same nothing a healthy repo gives. That would be a check on whether every gate is run which passes hardest at the moment it has stopped finding any.";
  let gate_names = await functions_names_ending_found_assert(
    "_gate_run",
    "no gate was found in this repo at all - the answer below would be nothing whatever the list holds, so look at what spells the ending being looked for rather than at the list",
  );
  ("The list is read off the file rather than off the loaded one, because a command that lists a gate and then asks this again would otherwise be answered from before its own edit, and hand its own finished work back as still to do.");
  let wired = await qa_gates_names();
  let unwired = list_difference(gate_names, wired);
  let exempt = functions_gate_run_unwired_exempt();
  let excused = list_map_property(exempt, "name");
  let named = list_difference(unwired, excused);
  ("A gate the repo has not recorded yet is passed over. Writing one and listing it are two edits to two files, seconds apart, and everybody works in this folder at once - so without this the check would be red for everyone every time anybody began a gate, which is the surest way to have it taken back out.");
  let missing = await functions_names_in_flight_without(named);
  return missing;
}
