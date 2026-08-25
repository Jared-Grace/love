import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_missing } from "./qa_gate_timings_missing.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { qa_gates_machine } from "./qa_gates_machine.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { qa_gate_timings_read } from "./qa_gate_timings_read.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function qa_gate_timings_coverage() {
  arguments_assert(arguments, 0);
  ("How much of the gate list the record of what each gate takes actually covers, counted.");
  ("The names of the gates it says nothing about are next door and this says how many there are, because the names are a list to work through and the count is the thing a person wants to know at a glance. Asking for the count and being handed two hundred names is how a reading stops being read.");
  ("The point of counting it at all is that nothing else ever says it out loud. The dealing of the shares gives a gate nobody has timed the average of the ones that have, which is a sound guess and a quiet one, so the record can go from covering every gate to covering half of them without a single thing changing in what anyone sees. Measured 2026-08-25 it had been sliding for a fortnight and had reached about half.");
  ("The number never reaches nought, and the part that cannot is worth having separately. The timing run walks the gates that live in this tree, so the ones that ask something of the machine around it are never walked and can never appear in the record - every one of them was absent on the day this was written. They are a floor under the missing number, not a slide in it, and a reader who does not know that reads an unfixable seventeen as neglect.");
  ("A name in the record that answers to no gate is the other direction of the same question, and it is cheap enough to say here. It means a gate was renamed after it was timed: the number is still in the file, nothing will ever read it again, and the gate under its new name counts as never measured.");
  ("This is a reading and deliberately not a gate. Coverage falls when somebody adds a gate, which is the thing everyone is encouraged to do, so a gate on it would charge the wrong person for the right work.");
  let missing = await qa_gate_timings_missing();
  let gates = qa_gates();
  let all = list_size(gates);
  let absent = list_size(missing);
  let timed = subtract(all, absent);
  let machine_gates = qa_gates_machine();
  let machine_names = list_map_property(machine_gates, "name");
  function machine_is(name) {
    let is = list_includes(machine_names, name);
    return is;
  }
  let never_walked = list_filter(missing, machine_is);
  let known = await qa_gate_timings_read();
  let recorded = object_property_names(known);
  let names = list_map_property(gates, "name");
  function gate_none(name) {
    let none = list_includes_not(names, name);
    return none;
  }
  let naming_no_gate = list_filter(recorded, gate_none);
  let coverage = {
    gates: all,
    timed,
    missing: absent,
    missing_never_walked: list_size(never_walked),
    naming_no_gate,
  };
  return coverage;
}
