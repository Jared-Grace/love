import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { list_starts_with } from "./list_starts_with.mjs";
import { list_starts_with_cases } from "./list_starts_with_cases.mjs";
import { property_get } from "./property_get.mjs";
export function list_starts_with_cases_gate_run() {
  "QA gate: every pair the corpus writes down is answered the way it says it should be.";
  "This reading is under a quiz rather than beside it, so getting it wrong shows up as a screen that throws two answers later and never as a wrong answer being marked right. It was wrong for exactly that reason once and nothing anywhere went red.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = list_starts_with_cases();
  function answer(c) {
    let list = property_get(c, "list");
    let list_prefix = property_get(c, "list_prefix");
    let starts = list_starts_with(list, list_prefix);
    return starts;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "starts",
    "why",
    "list starts with",
  );
  return r;
}
