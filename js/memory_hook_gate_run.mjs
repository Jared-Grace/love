import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { memory_hook_cases } from "./memory_hook_cases.mjs";
import { memory_hook_case_check } from "./memory_hook_case_check.mjs";
export async function memory_hook_gate_run() {
  "Runs the memory-path corpus as a gate: each payload goes through the real hook and its decision must match the one the corpus declares. Throws on any mismatch so the dispatcher seam exits nonzero.";
  let cases = memory_hook_cases();
  let results = await list_map_unordered_async(cases, memory_hook_case_check);
  for (let r of results) {
    let mark = r.pass ? "pass  " : "FAIL  ";
    let note = r.note === "" ? "" : "  " + r.note;
    console.log(mark + r.label + "  " + r.expected + " / " + r.actual + note);
  }
  function failed(r) {
    return !r.pass;
  }
  let failures = list_filter(results, failed);
  console.log("\npass " + (results.length - failures.length) + "  fail " + failures.length);
  if (failures.length > 0) {
    throw new Error("memory hook gate: " + failures.length + " failed");
  }
  return { pass: results.length, fail: 0 };
}
