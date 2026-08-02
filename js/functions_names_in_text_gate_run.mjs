import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { functions_names_in_text_cases } from "./functions_names_in_text_cases.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
import { property_get } from "./property_get.mjs";
export function functions_names_in_text_gate_run() {
  "Gate: each written-down piece of writing must give up exactly the functions the corpus says it names. Throws so the dispatcher seam exits nonzero.";
  "The reading this holds is a judgment that feeds a sweep, and the sweep runs over whatever a gate happened to print - so nothing it produces can be checked against a separate account of the same text. A clean sweep therefore proves nothing about the reading, and this corpus is where the reading itself is answerable.";
  "Order is compared as written, not as a set, because the answer is read back by a reader who expects the names in the order the writing put them.";
  let cases = functions_names_in_text_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let known = property_get(c, "known");
    let names = functions_names_in_text(text, known);
    return names;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "names",
    "why",
    "functions names in text",
  );
  return r;
}
