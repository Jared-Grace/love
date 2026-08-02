import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { guard_cases_read } from "./guard_cases_read.mjs";
import { guard_case_check } from "./guard_case_check.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
("Runs the bash-guard corpus as a gate: each command goes through the real");
("hook and its verdict must match the one data/guard_cases.json declares.");
("Throws on any mismatch so the r.mjs seam exits nonzero.");
export async function guard_gate_run() {
  let cases = await guard_cases_read();
  let results = await list_map_unordered_async(cases, guard_case_check);
  for (let r of results) {
    let mark = gate_case_mark(r.pass);
    let note = equal(r.note, "") ? "" : "  " + r.note;
    console.log(
      mark + r.command.padEnd(46) + r.expected + " / " + r.actual + note,
    );
  }
  function failed(r) {
    let n = not(r.pass);
    return n;
  }
  let failures = list_filter(results, failed);
  let passed = subtract(results.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error("guard gate: " + failures.length + " failed");
  }
  let r2 = {
    pass: results.length,
    fail: 0,
  };
  return r2;
}
