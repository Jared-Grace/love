import { js_code_literal_site_none_cases } from "./js_code_literal_site_none_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_literal_site_none } from "./js_code_literal_site_none.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_code_literal_site_none_cases_gate_run() {
  "QA gate: each small file written down in the corpus is judged the way that";
  "corpus says.";
  "What this guards against is a reader that quietly starts answering true. Its";
  "whole effect is to withhold entries from a report, so a reader that withheld";
  "everything would empty that report, and an empty report reads exactly like a";
  "repo with nothing left to do. Only a written-down case can tell those apart.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_code_literal_site_none_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let literal = property_get(c, "literal");
    let site_none = js_code_literal_site_none(code, literal);
    return site_none;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "site_none",
    "why",
    "literal site none",
  );
  return r;
}
