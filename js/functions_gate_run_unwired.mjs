import { qa_gates_names } from "./qa_gates_names.mjs";
import { functions_gate_run_unwired_exempt } from "./functions_gate_run_unwired_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { functions_names_ending_unused } from "./functions_names_ending_unused.mjs";
export async function functions_gate_run_unwired() {
  "The gates this repo has written and never listed, so nothing ever runs them.";
  "A gate is a function whose name ends in the two words the whole-repo gate's own members end in, and it is run by being a member of that list and by nothing else. So a gate that was written, tested by hand once, and never added is not a weak gate - it is a gate that has never run, and it reads exactly like the ones that do: same name, same shape, green when you call it.";
  "This is the quiet half of a check the repo already makes in the other direction. An orphaned corpus is caught because a corpus with nobody reading it is easy to spot from the corpus. A gate nobody runs cannot be spotted from the gate at all - only from the list.";
  "What counts as used is the whole of what this says for itself; the refusal on an empty left side and the passing over of names still being written are the shape it shares with its neighbour and are asked of that shape rather than repeated here.";
  "The list is read off the file rather than off the loaded one, because a command that lists a gate and then asks this again would otherwise be answered from before its own edit, and hand its own finished work back as still to do.";
  let wired = await qa_gates_names();
  ("A gate the list is meant never to hold is used in the only sense that matters here, so it stands beside the ones that are listed rather than being subtracted a second time afterwards.");
  let exempt = functions_gate_run_unwired_exempt();
  let excused = list_map_property(exempt, "name");
  list_add_multiple(wired, excused);
  let missing = await functions_names_ending_unused(
    "_gate_run",
    "no gate was found in this repo at all - the answer below would be nothing whatever the list holds, so look at what spells the ending being looked for rather than at the list",
    wired,
  );
  return missing;
}
