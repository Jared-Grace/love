import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_code_same_meaning_is } from "./js_code_same_meaning_is.mjs";
import { js_code_same_meaning_is_cases } from "./js_code_same_meaning_is_cases.mjs";
import { property_get } from "./property_get.mjs";
export function js_code_same_meaning_is_cases_gate_run() {
  "Asks whether two lines say the same thing of every pair the corpus writes down, and refuses the run when any pair is answered differently from the way it says.";
  let cases = js_code_same_meaning_is_cases();
  function answer(one) {
    let before = property_get(one, "before");
    let after = property_get(one, "after");
    let same = js_code_same_meaning_is(before, after);
    return same;
  }
  let label = "lines saying the same thing";
  let r = cases_gate_run_generic(cases, answer, "same", "why", label);
  return r;
}
