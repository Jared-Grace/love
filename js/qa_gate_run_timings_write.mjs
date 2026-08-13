import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_run_timings_path } from "./qa_gate_run_timings_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { qa_gate_timings_both } from "./qa_gate_timings_both.mjs";
export async function qa_gate_run_timings_write(told, here) {
  "Writes down how long every gate of this run took, so a run can answer with a verdict and still leave its detail somewhere reachable";
  "A run that prints its detail makes every reader trim it away by hand, and a run that returns its detail makes a verdict nobody can read at a glance. Writing it is the third thing: what comes back stays the size of an answer, and the hundred numbers behind it are one named reading away.";
  "It is written on the way past rather than at the end, because the end is not reached when anything went red - and a red run is the one whose times somebody came looking for.";
  arguments_assert(arguments, 2);
  let found = await qa_gate_timings_both(told, here);
  let path = qa_gate_run_timings_path();
  await file_overwrite_json(path, found);
  return found;
}
