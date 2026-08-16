import { cases_checked_gate_run_generic } from "./cases_checked_gate_run_generic.mjs";
import { stop_next_steps_hook_case_check } from "./stop_next_steps_hook_case_check.mjs";
import { stop_next_steps_hook_cases } from "./stop_next_steps_hook_cases.mjs";
export async function stop_next_steps_hook_gate_run() {
  "Runs the stop-hook corpus as a gate: each made-up conversation goes past the real hook and its verdict must match the one the corpus declares. Throws on any mismatch so the dispatcher seam exits nonzero.";
  let cases = stop_next_steps_hook_cases();
  let r = await cases_checked_gate_run_generic(
    cases,
    stop_next_steps_hook_case_check,
    "stop next steps hook",
    " - a wrong block here costs a whole model turn in every parallel session, so read which case moved before changing what the hook looks for",
  );
  return r;
}
