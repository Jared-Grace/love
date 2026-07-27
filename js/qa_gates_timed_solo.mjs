import { timings_total_ms } from "./timings_total_ms.mjs";
import { console_log_silence } from "./console_log_silence.mjs";
import { console_log_restore } from "./console_log_restore.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { timings_print } from "./timings_print.mjs";
export async function qa_gates_timed_solo() {
  "How long each gate takes with nothing else running, slowest first.";
  "This is the one number the whole-suite run cannot give you. That run asks every gate at once, so what it times is a gate competing with all the others for the same machine - which is the right number for predicting how long the suite takes, and the wrong one for deciding which gate to make faster. A gate can look slow there purely because it waited.";
  "One gate at a time is therefore the point, not an oversight: nothing else may be running, or the number means the contended thing again.";
  "It exists because the question kept being answered by hand, with a shell loop that started a fresh node for every gate. That loop timed the process starts as much as the gates, left nothing behind to run again, and had to be approved every time it was written out; this is one call, in one process, that anybody can repeat.";
  "The total comes back with the ranking because the hand-rolled version always ended by adding the printed numbers up. Two questions get asked together - which gate to make faster, and whether the set is worth attacking at all - so answering only the first sent every reader back to a sum over the printed lines.";
  let gates = qa_gates();
  let real = console_log_silence();
  let results = null;
  try {
    results = await list_map_async(gates, qa_gate_result);
  } finally {
    console_log_restore(real);
  }
  timings_print(results);
  let total_ms = timings_total_ms(results);
  let report = {
    gates: results.length,
    total_ms,
    timings: results,
  };
  return report;
}
