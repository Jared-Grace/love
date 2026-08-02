import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { memory_hook_cases } from "./memory_hook_cases.mjs";
import { memory_hook_case_check } from "./memory_hook_case_check.mjs";
export async function memory_hook_gate_run() {
  "Runs the memory-path corpus as a gate: each payload goes through the real hook and its decision must match the one the corpus declares. Throws on any mismatch so the dispatcher seam exits nonzero.";
  let cases = memory_hook_cases();
  let results = await list_map_unordered_async(cases, memory_hook_case_check);
  for (let r of results) {
    let mark = gate_case_mark(r.pass);
    let note = equal(r.note, "") ? "" : "  " + r.note;
    console.log(mark + r.label + "  " + r.expected + " / " + r.actual + note);
  }
  function failed(r) {
    let n = not(r.pass);
    return n;
  }
  let failures = list_filter(results, failed);
  let passed = subtract(results.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error("memory hook gate: " + failures.length + " failed");
  }
  let r2 = {
    pass: results.length,
    fail: 0,
  };
  return r2;
}
