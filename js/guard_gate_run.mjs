import { guard_cases_read } from "./guard_cases_read.mjs";
import { guard_case_check } from "./guard_case_check.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";

// Runs the bash-guard corpus as a gate: each command goes through the real
// hook and its verdict must match the one data/guard_cases.json declares.
// Throws on any mismatch so the r.mjs seam exits nonzero.
export async function guard_gate_run() {
  let cases = await guard_cases_read();
  let results = await list_map_unordered_async(cases, guard_case_check);
  for (let r of results) {
    let mark = r.pass ? "pass  " : "FAIL  ";
    let note = r.note === "" ? "" : "  " + r.note;
    console.log(mark + r.command.padEnd(46) + r.expected + " / " + r.actual + note);
  }
  function failed(r) {
    return !r.pass;
  }
  let failures = list_filter(results, failed);
  console.log("\npass " + (results.length - failures.length) + "  fail " + failures.length);
  if (failures.length > 0) {
    throw new Error("guard gate: " + failures.length + " failed");
  }
  return { pass: results.length, fail: 0 };
}
