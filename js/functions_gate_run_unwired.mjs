import { functions_names_untracked } from "./functions_names_untracked.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { functions_gate_run_unwired_exempt } from "./functions_gate_run_unwired_exempt.mjs";
export async function functions_gate_run_unwired() {
  "The gates this repo has written and never listed, so nothing ever runs them.";
  "A gate is a function whose name ends in the two words the whole-repo gate's own members end in, and it is run by being a member of that list and by nothing else. So a gate that was written, tested by hand once, and never added is not a weak gate - it is a gate that has never run, and it reads exactly like the ones that do: same name, same shape, green when you call it.";
  "This is the quiet half of a check the repo already makes in the other direction. An orphaned corpus is caught because a corpus with nobody reading it is easy to spot from the corpus. A gate nobody runs cannot be spotted from the gate at all - only from the list.";
  let f_names = await functions_names();
  let gate_names = list_filter_ends_with(f_names, "_gate_run");
  ("Refused when no gate is found at all, because this hands back a subtraction and an empty left side gives the same nothing a healthy repo gives. That would be a check on whether every gate is run which passes hardest at the moment it has stopped finding any.");
  list_empty_not_is_assert_json(gate_names, {
    hint: "no gate was found in this repo at all - the answer below would be nothing whatever the list holds, so look at what spells the ending being looked for rather than at the list",
  });
  let gates = qa_gates();
  let wired = list_map_property(gates, "name");
  let unwired = list_difference(gate_names, wired);
  let exempt = functions_gate_run_unwired_exempt();
  let excused = list_map_property(exempt, "name");
  let named = list_difference(unwired, excused);
  ("A gate the repo has not recorded yet is passed over. Writing one and listing it are two edits to two files, seconds apart, and everybody works in this folder at once - so without this the check would be red for everyone every time anybody began a gate, which is the surest way to have it taken back out.");
  let in_flight = await functions_names_untracked();
  let missing = list_difference(named, in_flight);
  return missing;
}
