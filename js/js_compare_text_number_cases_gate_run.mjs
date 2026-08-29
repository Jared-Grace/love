import { js_compare_text_number_cases } from "./js_compare_text_number_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { js_compare_text_number } from "./js_compare_text_number.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_compare_text_number_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that corpus says.";
  "The whole-repo gate over this reader passes by finding nothing, so nothing there can tell a clean repo from a reader that has stopped looking. The corpus can, because two of its cases must come back with a line.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_compare_text_number_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let found = js_compare_text_number(ast);
    return found;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "found",
    "why",
    "text compared with a number",
  );
  return r;
}
