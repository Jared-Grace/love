import { greater_than } from "./greater_than.mjs";
import { js_code_confined_cases } from "./js_code_confined_cases.mjs";
import { js_code_confined_refusals } from "./js_code_confined_refusals.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_code_confined_cases_gate_run() {
  "QA gate: every escape in the corpus is refused by the confined runner's check, and every lesson-shaped program is let through.";
  "The runner it guards is what lets the course run its programs without the power to run anything at all, so a check gone silent would hand that power back with nothing going red.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_code_confined_cases();
  function answer(c) {
    let refusals = js_code_confined_refusals(c.code);
    let g = greater_than(refusals.length, 0);
    return g;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "refused",
    "name",
    "confined code refusals",
  );
  return r;
}
