import { cases_checked_gate_run_generic } from "./cases_checked_gate_run_generic.mjs";
import { guard_cases_read } from "./guard_cases_read.mjs";
import { guard_case_check } from "./guard_case_check.mjs";
("Runs the bash-guard corpus as a gate: each command goes through the real");
("hook and its verdict must match the one data/guard_cases.json declares.");
("Throws on any mismatch so the r.mjs seam exits nonzero.");
export async function guard_gate_run() {
  let cases = await guard_cases_read();
  let r = await cases_checked_gate_run_generic(
    cases,
    guard_case_check,
    "guard",
  );
  return r;
}
