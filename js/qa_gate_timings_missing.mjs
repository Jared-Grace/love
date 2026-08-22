import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { qa_gate_timings_read } from "./qa_gate_timings_read.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function qa_gate_timings_missing() {
  arguments_assert(arguments, 0);
  ("The gates the record of what each gate takes says nothing about, by name.");
  ("The shares are dealt by that record, and a gate the record has never heard of is dealt at whatever weight the dealing gives an unknown. So the record naming fewer gates than there are is not a gap in a report, it is the dealing guessing - and it guesses for exactly the gates nobody has measured, which are the new ones, which are the ones most likely to be doing something expensive nobody has looked at yet.");
  ("This is asked of the gate list rather than of a written-down number of gates, because the number of gates is the thing that keeps changing and any copy of it goes stale the moment somebody adds one. The list is the only thing that knows.");
  ("It is worth having beside the staleness question rather than inside it, because the two ask different things. Staleness asks how long ago the record was written; this asks whether the record is about the gates there are now. A record written yesterday that has never heard of half of them is fresh and useless at the same time, and only this one can say so.");
  let known = await qa_gate_timings_read();
  let timed = object_property_names(known);
  let gates = qa_gates();
  function timed_not(gate) {
    let missing = list_includes_not(timed, gate.name);
    return missing;
  }
  let names = list_filter_map_property(gates, timed_not, "name");
  return names;
}
