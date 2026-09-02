import { functions_gate_run_unwired_exempt } from "./functions_gate_run_unwired_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { functions_names_ending_found_assert } from "./functions_names_ending_found_assert.mjs";
import { list_difference } from "./list_difference.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { qa_gates_machine_names } from "./qa_gates_machine_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_gate_run_unwired_exempt_dead() {
  "The written excuses for standing outside the gate lists that no longer excuse anything.";
  "An exemption is a hand-typed claim that one gate is not expected to be a member, and it is the only part of this check that can go on being believed after it stops being true. Both lists beside it are read off the files and cannot drift. The excuse is written once and read forever.";
  "Two ways one dies, wanting opposite repairs. A name belonging to no gate at all is left over from a deletion, and the line should go. A name since added to one of the two lists is being excused from a list it is now in, so the gate does run and the excuse is the wrong half, not the wiring.";
  "Worth checking because of what a dead excuse does to the reading next door: every excused name is added to the used side before the subtraction, so an excuse covering nothing quietly widens the set that counts as run. That is the same fault the sibling check on grantable rule writers already names in its own words, an exception that covers nothing hides the next one that would.";
  "Both counts are handed back beside the two faults because each fault is a subtraction, and a subtraction from nothing gives the same empty answer as a repo in good order. Excused at nought would make the first empty whatever is wrong, and listed at nought the second, so the numbers are the whole of what tells a clean answer from an answer about nothing.";
  let exempt = functions_gate_run_unwired_exempt();
  let excused = list_map_property(exempt, "name");
  let found = await functions_names_ending_found_assert(
    "_gate_run",
    "no gate was found in this repo at all - every excuse would then read as naming nothing, so look at what spells the ending being looked for rather than at the excuses",
  );
  let stale = list_difference(excused, found);
  let wired = await qa_gates_names();
  let machine = await qa_gates_machine_names();
  list_add_multiple(wired, machine);
  let contradicted = list_intersection(excused, wired);
  let dead = {
    excused: list_size(excused),
    listed: list_size(wired),
    stale,
    contradicted,
  };
  return dead;
}
