import { qa_gates_timed_solo_generic } from "./qa_gates_timed_solo_generic.mjs";
import { qa_gates_tree } from "./qa_gates_tree.mjs";
import { list_find_property_json } from "./list_find_property_json.mjs";
export async function qa_gate_timed_solo(name) {
  "How long one named gate takes on its own, with the folders taken as unchanging. This is the number to compare a gate against after making it faster, and the only way to get it was to time every gate in the suite and read one line off the bottom.";
  "Ask it with the frozen copy as the folder it starts in, or the answer is about the folder everybody is editing instead. There each name's file is looked for on disk every time it is wanted, which for a sweep over nine thousand functions is most of what gets measured - so a gate timed in the living folder can read as twice what the suite ever spends on it, and the part that grew is not the part anybody changed.";
  "Only a gate the suite already asks can be named. That is the whole of the safety here: a name is looked up among the gates rather than turned into something to run, so no name can reach anything that was not going to be run anyway.";
  let gates = qa_gates_tree();
  let gate = list_find_property_json(gates, "name", name);
  let report = await qa_gates_timed_solo_generic([gate]);
  return report;
}
