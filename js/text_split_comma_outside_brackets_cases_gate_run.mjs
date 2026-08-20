import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { catch_null } from "./catch_null.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_comma_outside_brackets } from "./text_split_comma_outside_brackets.mjs";
import { text_split_comma_outside_brackets_cases } from "./text_split_comma_outside_brackets_cases.mjs";
export function text_split_comma_outside_brackets_cases_gate_run() {
  ("QA gate: every list the corpus writes down is cut the way that corpus says, and every one it says is refused is still refused.");
  ("A refusal is written as nothing at all, so the cases holding a mismatched bracket are checked by the same run as the ones that work.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = text_split_comma_outside_brackets_cases();
  function answer(c) {
    let written = property_get(c, "written");
    function lambda() {
      let split = text_split_comma_outside_brackets(written);
      return split;
    }
    let taken = catch_null(lambda);
    return taken;
  }
  let r = cases_gate_run_generic(cases, answer, "taken", "why", "bracketed list");
  return r;
}
