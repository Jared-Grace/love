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
  let r = await cases_checked_gate_run_generic(cases, guard_case_check, "guard");
  return r;
}
