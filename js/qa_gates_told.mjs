import { console_log_silence } from "./console_log_silence.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
import { console_log_restore } from "./console_log_restore.mjs";
import { qa_gate_timings_print } from "./qa_gate_timings_print.mjs";
import { qa_gate_failures_report } from "./qa_gate_failures_report.mjs";
import { equal } from "./equal.mjs";
export async function qa_gates_told(gates) {
  "Asks every gate in a list and says which of them complained, without complaining itself";
  "Whether a complaint should stop everything is the caller's to decide, not this one's - one caller wants to ask a second set of questions elsewhere before saying anything, and another wants to stop at the first sign of trouble";
  "Each gate is finished before the next is started, because these are questions for one thread and what starting them together bought was repetition: a result saved for reuse is only saved once it is finished, so gates started together each work it out again. Measured 2026-11-03 on a busy machine, the same share in the same copy at the same moment, started together against in turn: 1087 seconds against 825 for one share, 1863 against 1606 for another";
  "Nothing prints while they run, because only a complaint is worth reading and the complaint comes later. A gate that complains is then asked again on its own, where its output belongs to it alone";
  let real = console_log_silence();
  let results = null;
  try {
    results = await list_map_async(gates, qa_gate_result);
  } finally {
    console_log_restore(real);
  }
  qa_gate_timings_print(results);
  let failed = await qa_gate_failures_report(results, gates);
  let quiet = equal(failed.length, 0);
  let r = {
    green: quiet,
    failed: failed,
    timings: results,
  };
  return r;
}
