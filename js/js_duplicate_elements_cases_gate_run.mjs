import { js_duplicate_elements_cases } from "./js_duplicate_elements_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { js_duplicate_elements_size } from "./js_duplicate_elements_size.mjs";
import { js_duplicate_elements } from "./js_duplicate_elements.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_duplicate_elements_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that corpus says.";
  "What this guards against is a reader that quietly stops finding anything. The sweep above it is held to zero, so a reader that answered with nothing whatever it was given would print a clean run of the very check that exists to catch what it stopped seeing. Only a written-down case can tell those apart.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_duplicate_elements_cases();
  let size = js_duplicate_elements_size();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let names = js_duplicate_elements(ast, size);
    return names;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "names",
    "why",
    "duplicate elements",
  );
  return r;
}
