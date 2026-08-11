import { console_log_restore } from "./console_log_restore.mjs";
import { console_log_silence } from "./console_log_silence.mjs";
import { function_paths_frozen_enable } from "./function_paths_frozen_enable.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
import { timings_print } from "./timings_print.mjs";
import { timings_total_ms } from "./timings_total_ms.mjs";
export async function qa_gates_timed_solo_generic(gates) {
  "How long each of a given list of gates takes with nothing else running, slowest first.";
  "This is the one number the whole-suite run cannot give you. That run asks every gate at once, so what it times is a gate competing with all the others for the same machine - which is the right number for predicting how long the suite takes, and the wrong one for deciding which gate to make faster. A gate can look slow there purely because it waited.";
  "One gate at a time is therefore the point, not an oversight: nothing else may be running, or the number means the contended thing again.";
  "Which is only half of what it can promise, and the load numbers are here because the missing half already misled somebody. One gate at a time is all this can arrange INSIDE its own run; several of us share the machine, and a neighbour asking the whole suite at the same moment contends for exactly the same processors. A gate measured then reads as slow when it is merely waiting - one that takes five seconds was written down as taking thirty, and named the thing to fix. So the load before and after come back with the times, and a run taken while the machine was busy is one to take again rather than to act on.";
  "Which gates to time is the caller's, because the two places this can stand want different lists. Standing in the living folder there is no reason to leave any out. Standing inside the frozen copy the three that ask about the machine and about where the folder sits have no answer worth having, and timing them there would be timing them failing.";
  "It says the folders cannot change, and that is safe to say from either place because the saying is looked at where it lands and refused unless it can be seen to be true. In the living folder it changes nothing. In the frozen copy it turns on the same once-per-name lookup the suite gets - and without it the ranking would be of a slower repo than the one being ranked, by an amount that differs from gate to gate rather than shifting them all together.";
  function_paths_frozen_enable();
  let load_before = machine_load_average();
  let real = console_log_silence();
  let results = null;
  try {
    results = await list_map_async(gates, qa_gate_result);
  } finally {
    console_log_restore(real);
  }
  timings_print(results);
  let total_ms = timings_total_ms(results);
  let load_after = machine_load_average();
  let report = {
    gates: results.length,
    total_ms,
    load_before,
    load_after,
    timings: results,
  };
  return report;
}
