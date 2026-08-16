import { arguments_assert } from "./arguments_assert.mjs";
import { text_lines_ends_kept_cases } from "./text_lines_ends_kept_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_lines_ends_kept } from "./text_lines_ends_kept.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_lines_ends_kept_cases_gate_run() {
  "QA gate: a long answer keeps exactly the ends its corpus says it keeps, and a short one comes back untouched.";
  "Every result Claude is handed now passes through this, so a fault here is not a wrong answer in one place - it is a wrong answer everywhere at once, and one that looks like an answer. Coming back untouched is the case worth guarding hardest: get that wrong and a short result grows a line claiming something was left out when nothing was.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = text_lines_ends_kept_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let count = property_get(c, "count");
    let kept = text_lines_ends_kept(text, count);
    return kept;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "kept",
    "why",
    "text lines ends kept",
  );
  return r;
}
