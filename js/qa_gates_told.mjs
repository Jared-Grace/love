export async function qa_gates_told(gates) {
  "Asks every gate in a list and says which of them complained, without complaining itself";
  "Whether a complaint should stop everything is the caller's to decide, not this one's - one caller wants to ask a second set of questions elsewhere before saying anything, and another wants to stop at the first sign of trouble";
  "Each gate is an independent read-only question, so they are all asked at once rather than one after another - the wait becomes the slowest single question instead of the sum of every question";
  "Nothing prints while they run, because lines arriving from work happening side by side cannot be attributed by a reader. A gate that complains is then asked again on its own, where its output belongs to it alone and is worth reading";
  let real = console_log_silence();
  let results = null;
  try {
    results = await list_map_unordered_async(gates, qa_gate_result);
  } finally {
    console_log_restore(real);
  }
  timings_print(results);
  let failed = await qa_gate_failures_report(results, gates);
  let quiet = equal(failed.length, 0);
  let r = {
    green: quiet,
    failed: failed,
    timings: results,
  };
  return r;
}
