import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_while_frozen_cases } from "./js_while_frozen_cases.mjs";
import { js_code_while_frozen_conditions } from "./js_code_while_frozen_conditions.mjs";
import { property_get } from "./property_get.mjs";
export function js_while_frozen_cases_gate_run() {
  "QA gate: each written-out loop in the corpus is called stuck exactly as often as the corpus says";
  "The sweep this reader feeds answers nothing while the repo is well, so a reader that had quietly stopped looking would give the same clean answer as a repo with nothing wrong in it - the most reassuring shape a total failure can wear, and one this repo has already been fooled by once";
  "So the cases fail in both directions: a reader that never names a loop breaks the four that must be named, and one that names every loop breaks the eleven that must be left alone - among them every ordinary way a loop has of ending, which are the ways this could send somebody to read working code";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_while_frozen_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let frozen = js_code_while_frozen_conditions(code);
    let told = frozen.length;
    return told;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "stuck",
    "name",
    "while frozen",
  );
  return r;
}
