export async function qa_gates_run(gates) {
  "Asks every gate in a list and complains if any of them do";
  "Each gate is an independent read-only question, so they are all asked at once rather than one after another - the wait becomes the slowest single question instead of the sum of every question";
  "Nothing prints while they run, because lines arriving from work happening side by side cannot be attributed by a reader. A gate that complains is then asked again on its own, where its output belongs to it alone and is worth reading";
  "Which gates to ask is the caller's to choose, because not every gate answers a question about the code - one asks the machine and one asks where the folder sits, and neither can be asked of a copy";
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
