import { text_split_comma_nested_cases } from "./text_split_comma_nested_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_comma_nested } from "./text_split_comma_nested.mjs";
import { catch_null } from "./catch_null.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_split_comma_nested_cases_gate_run() {
  "QA gate: every list the corpus writes down is taken apart the way that corpus says, and every one it says is refused is still refused.";
  "A refusal is written as nothing at all, so the cases that hold a decision open are checked by the same run as the ones that work. What this guards is not only a wrong split - it is somebody meeting one of those refusals, reading it as a bug, and taking it out.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = text_split_comma_nested_cases();
  function answer(c) {
    let written = property_get(c, "written");
    function lambda() {
      let split = text_split_comma_nested(written);
      return split;
    }
    let taken = catch_null(lambda);
    return taken;
  }
  let r = cases_gate_run_generic(cases, answer, "taken", "why", "nested list");
  return r;
}
