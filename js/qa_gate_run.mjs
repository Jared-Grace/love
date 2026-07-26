import { greater_than } from "./greater_than.mjs";
import { timings_print } from "./timings_print.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
import { qa_gate_failures_report } from "./qa_gate_failures_report.mjs";
import { console_log_silence } from "./console_log_silence.mjs";
import { console_log_restore } from "./console_log_restore.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function qa_gate_run() {
  "The repo-wide correctness gate (alias `q`). Every gate is an independent";
  "read-only question about the repo, so they are all asked at once rather than";
  "one after another — the wait becomes the slowest single question instead of";
  "the sum of every question.";
  "Nothing prints while they run, because lines arriving from work happening side";
  "by side cannot be attributed by a reader. A gate that complains is then asked";
  "again on its own, where its output belongs to it alone and is worth reading.";
  let gates = qa_gates();
  let real = console_log_silence();
  let results = null;
  try {
    results = await list_map_unordered_async(gates, qa_gate_result);
  } finally {
    console_log_restore(real);
  }
  timings_print(results);
  let failed = await qa_gate_failures_report(results, gates);
  if (greater_than(failed.length, 0)) {
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
  console.log("\nall gates passed");
  let r = {
    gates: gates.length,
    failed: 0,
    timings: results,
  };
  return r;
}
