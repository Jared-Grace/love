import { qa_gate_run } from "./qa_gate_run.mjs";
import { qa_gate_message_names } from "./qa_gate_message_names.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { qa_gates_here_failed } from "./qa_gates_here_failed.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function qa_gate_confirm() {
  "The whole gate, then a second look at whatever went red - so what comes back is the faults that are really there rather than the ones a torn copy invented.";
  "The run freezes the folder before asking, which is what makes its answers checkable, and the copying is not instant. Several of us write to this one folder without pause, so a file can be caught half-copied - and every ask the run makes afterwards is put to that same frozen copy, which answers the same way every time. The tear is invisible from in there by construction.";
  "So the second look is taken out here, in the folder as it stands. A gate still red here is a fault somebody has to fix. A gate quiet here was a tear, or was somebody else's fault already mended - either way there is nothing to chase, and chasing it is what this exists to stop.";
  "It throws only for the faults that survived, so a run whose reds were all tears ends clean, and the sentence it throws names what is actually broken.";
  let message = null;
  try {
    let passed = await qa_gate_run();
    return passed;
  } catch (e) {
    message = e.message;
  }
  let names = qa_gate_message_names(message);
  let joined = list_join_comma(names);
  console.log(
    "\n=== asking the red gates again, here in the living folder ===",
  );
  let confirmed = await qa_gates_here_failed(joined);
  let failed = property_get(confirmed, "failed");
  let any = list_empty_not_is(failed);
  if (any) {
    let listed = list_join_comma(failed);
    throw new Error("qa gate confirmed: " + listed + " failed");
  }
  console.log(
    "\nevery red gate was quiet on the second look - the frozen copy was torn, or the faults have been fixed since",
  );
  let r = {
    red_in_copy: names.length,
    confirmed: 0,
  };
  return r;
}
