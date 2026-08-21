import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_run_timings_path } from "./qa_gate_run_timings_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function qa_gate_run_timings_read() {
  "How long each gate of the last whole run took, slowest first, beside how many of the repo's gates that was";
  "This is the detail the run itself no longer prints. Asking for it by name is what replaced cutting the last few lines off the run's output, and the difference is that a name can be composed, granted and read by something other than a person looking at a screen.";
  "Nothing here answers a question about the code, and no gate should ever be built on it. A gate that has grown slower is worth knowing about and is not a fault, and a machine that was busy while the run happened would fail such a gate every ordinary afternoon.";
  "A file that was never written answers with nothing rather than complaining, because a repo that has not run its gates yet has honestly nothing to say about how long they took.";
  "★ THESE NUMBERS OVERLAP AND SO CANNOT BE COMPARED AGAINST EACH OTHER AS COSTS. Every gate in a share is started at once, and each one's clock runs from its own beginning to its own end while every sibling is competing for the same processors - so what is written down is how long a gate was in flight in a crowd, and never what it costs. Measured 2026-08-21: the top fourteen came to four thousand five hundred seconds inside a run whose whole wall clock was about eleven hundred, which is only possible because they were nearly all running at the same time.";
  "So the ordering here is close to the order the gates were STARTED IN, and a cheap gate that began early and ended late sits at the top wearing the largest number in the repo. Whoever reads this looking for something to make faster is being sent to a gate chosen by the scheduler. The one sound way to learn what a single gate costs is to ask that gate on its own, on a machine with nothing else running - and the whole-run number is the sum of nothing, so it cannot be got from here at all.";
  arguments_assert(arguments, 0);
  let path = qa_gate_run_timings_path();
  let found = await file_read_json_initialize(path, {});
  return found;
}
