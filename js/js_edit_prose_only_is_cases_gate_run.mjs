import { js_edit_prose_only_is_cases } from "./js_edit_prose_only_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_edit_prose_only_is } from "./js_edit_prose_only_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_edit_prose_only_is_cases_gate_run() {
  "QA gate: each pair of pieces written down in the corpus is called an edit touching nothing but prose exactly when that corpus says it is";
  "The reading is one-sided on purpose - it says no whenever it cannot tell - and one-sidedness is the failure that hides. A reading that had quietly started saying no to everything would send nobody anywhere wrong and would look exactly like a reading working perfectly, so the three cases that must come back yes are what hold it up.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_edit_prose_only_is_cases();
  function answer(c) {
    let text_before = property_get(c, "text_before");
    let text_after = property_get(c, "text_after");
    let prose_only_is = js_edit_prose_only_is(text_before, text_after);
    return prose_only_is;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "prose_only_is",
    "name",
    "edit prose only",
  );
  return r;
}
