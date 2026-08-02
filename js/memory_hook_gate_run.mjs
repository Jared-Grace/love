import { cases_checked_gate_run_generic } from "./cases_checked_gate_run_generic.mjs";
import { memory_hook_cases } from "./memory_hook_cases.mjs";
import { memory_hook_case_check } from "./memory_hook_case_check.mjs";
export async function memory_hook_gate_run() {
  "Runs the memory-path corpus as a gate: each payload goes through the real hook and its decision must match the one the corpus declares. Throws on any mismatch so the dispatcher seam exits nonzero.";
  let cases = memory_hook_cases();
  let r = await cases_checked_gate_run_generic(
    cases,
    memory_hook_case_check,
    "memory hook",
  );
  return r;
}
