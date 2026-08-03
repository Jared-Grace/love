import { property_js_parse } from "./property_js_parse.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_identifiers_renamed_without_naming_check } from "./js_identifiers_renamed_without_naming_check.mjs";
import { js_identifiers_renamed_without_naming_check_cases } from "./js_identifiers_renamed_without_naming_check_cases.mjs";
export function js_identifiers_renamed_without_naming_check_cases_gate_run() {
  "QA gate: a piece of code is called a rename that asked nothing exactly when it walks every word, writes over one, and never asks which words merely name something";
  "The sweep that reads the whole repo with this comes back empty, and empty is also what a reading that had stopped working would come back with. So the cases carry four pieces of code it must stay quiet about and one it must not, and a reading that answered yes to everything or no to everything fails here rather than passing there";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_identifiers_renamed_without_naming_check_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let walked = js_identifiers_renamed_without_naming_check(ast);
    return walked;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "walked",
    "name",
    "renamed without asking",
  );
  return r;
}
