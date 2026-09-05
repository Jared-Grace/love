import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_both } from "./qa_gate_timings_both.mjs";
import { qa_gate_run_timings_path } from "./qa_gate_run_timings_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function qa_gate_run_timings_write(told, here, gates_count) {
  "$plain gates_count";
  "Writes down how long every gate of this run was outstanding, so a run can answer with a verdict and still leave its detail somewhere reachable";
  "Outstanding rather than took, because the gates of a share are all asked at once inside one process and each one's clock runs while the rest of them run. The numbers here are therefore much larger than the work, and they do not add up to anything: one run's added up to thirty seven hours inside twenty eight minutes of wall clock. What a gate costs on its own is a separate reading, timed one at a time on a quiet machine and kept in its own file, and the two must never be put beside each other.";
  "A run that prints its detail makes every reader trim it away by hand, and a run that returns its detail makes a verdict nobody can read at a glance. Writing it is the third thing: what comes back stays the size of an answer, and the hundred numbers behind it are one named reading away.";
  "It is written on the way past rather than at the end, because the end is not reached when anything went red - and a red run is the one whose times somebody came looking for.";
  "How many gates the repo has is carried through rather than looked up on the way, so that nothing on this path can throw. Being written on the way past is only worth anything if getting here cannot fail, and looking the count up meant bringing in every gate's file at the one moment a verdict exists and is not yet written down.";
  arguments_assert(arguments, 3);
  let found = await qa_gate_timings_both(told, here, gates_count);
  let path = qa_gate_run_timings_path();
  await file_overwrite_json(path, found);
  return found;
}
