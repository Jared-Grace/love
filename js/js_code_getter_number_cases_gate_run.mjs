import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_code_getter_number } from "./js_code_getter_number.mjs";
import { js_code_getter_number_cases } from "./js_code_getter_number_cases.mjs";
import { property_get } from "./property_get.mjs";
export function js_code_getter_number_cases_gate_run() {
  "QA gate: each small file written down in the corpus gives up the number that corpus says it gives up.";
  "This reading decides what a whole file's writings of a number are pointed at. It is asked once, and its answer is then written into every site holding that number, so an answer that is merely plausible is spent everywhere before anybody reads it back.";
  "The two directions fail differently and both fail quietly. A reader that stopped answering would refuse every route and look exactly like a repo with no number worth naming; a reader that answered too readily would point real sites at a function that hands back something else, which still runs and still returns a number. Only written-down cases tell either apart from a healthy run.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_code_getter_number_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let f_name = property_get(c, "f_name");
    let number = js_code_getter_number(code, f_name);
    return number;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "number",
    "why",
    "code getter number",
  );
  return r;
}
