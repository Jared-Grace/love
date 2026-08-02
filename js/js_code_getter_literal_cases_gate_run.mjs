import { js_code_getter_literal_cases } from "./js_code_getter_literal_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_code_getter_literal_cases_gate_run() {
  "QA gate: each small file written down in the corpus gives up the value that";
  "corpus says it gives up.";
  "This reading is the head of the duplicate report - nothing downstream can find";
  "a repeated constant this does not first name. So a reader that quietly stopped";
  "answering would empty the report, which reads exactly like a repo with nothing";
  "left to tidy; and a reader that answered too readily would offer a repair that";
  "breaks the code it was asked to tidy. Only written-down cases tell either apart";
  "from a healthy run.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_code_getter_literal_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let f_name = property_get(c, "f_name");
    let literal = js_code_getter_literal(code, f_name);
    return literal;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "literal",
    "why",
    "code getter literal",
  );
  return r;
}
