import { functions_gate_run_unwired_exempt } from "./functions_gate_run_unwired_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { functions_names_ending_found_assert } from "./functions_names_ending_found_assert.mjs";
import { exemption_entries_dead } from "./exemption_entries_dead.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { qa_gates_machine_names } from "./qa_gates_machine_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_gate_run_unwired_exempt_dead() {
  "The written excuses for standing outside the gate lists that no longer excuse anything, and the ones that never argued for themselves.";
  "An exemption is a hand-typed claim that one gate is not expected to be a member, and it is the only part of this check that can go on being believed after it stops being true. Both lists beside it are read off the files and cannot drift. The excuse is written once and read forever.";
  "Two of the three faults are what any let-off list can carry and are asked next door. The third belongs to this list alone: a name since added to one of the two rosters is being excused from a list it is now in, so the gate does run and the excuse is the wrong half rather than the wiring.";
  "None of the three can hide an unrun gate, and it would be easy to say otherwise. The reading next door adds every excused name to the run side and then subtracts, so a name no gate answers to takes nothing off the answer and a name already listed changes nothing. What a dead excuse costs comes later: it reads as a judgment somebody made, and it is a standing let-off attached to a name, so a gate written under that name afterwards is excused from the moment it exists without anybody arguing for it.";
  let exempt = functions_gate_run_unwired_exempt();
  let excused = list_map_property(exempt, "name");
  let found = await functions_names_ending_found_assert(
    "_gate_run",
    "no gate was found in this repo at all - every excuse would then read as naming nothing, so look at what spells the ending being looked for rather than at the excuses",
  );
  let dead = exemption_entries_dead(exempt, excused, found);
  let wired = await qa_gates_names();
  let machine = await qa_gates_machine_names();
  list_add_multiple(wired, machine);
  let contradicted = list_intersection(excused, wired);
  let r = {
    excused: dead.excused,
    listed: list_size(wired),
    stale: dead.stale,
    contradicted,
    unreasoned: dead.unreasoned,
  };
  return r;
}
