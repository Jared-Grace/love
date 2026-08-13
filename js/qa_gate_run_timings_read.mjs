import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_run_timings_path } from "./qa_gate_run_timings_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function qa_gate_run_timings_read() {
  "How long each gate of the last whole run took, slowest first, beside how many of the repo's gates that was";
  "This is the detail the run itself no longer prints. Asking for it by name is what replaced cutting the last few lines off the run's output, and the difference is that a name can be composed, granted and read by something other than a person looking at a screen.";
  "Nothing here answers a question about the code, and no gate should ever be built on it. A gate that has grown slower is worth knowing about and is not a fault, and a machine that was busy while the run happened would fail such a gate every ordinary afternoon.";
  "A file that was never written answers with nothing rather than complaining, because a repo that has not run its gates yet has honestly nothing to say about how long they took.";
  arguments_assert(arguments, 0);
  let path = qa_gate_run_timings_path();
  let found = await file_read_json_initialize(path, {});
  return found;
}
