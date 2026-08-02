import { permission_tool_unmatched_cases } from "./permission_tool_unmatched_cases.mjs";
import { permission_rule_tool_unmatched_is } from "./permission_rule_tool_unmatched_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function permission_tool_unmatched_gate_run() {
  "Gate: the written-down rules must each get the answer the corpus declares. The audit built on this judgment reads the live settings files, where a correct answer and a broken one both come back empty today, so this is the only place a mistake in it can be seen. Throws so the dispatcher seam exits nonzero.";
  "The counting, the mark per case, the tally and the counted throw were written out by hand here first, and are the same twenty-five lines every gate of this shape had. They live in one place now, so this says only which reader is being asked and what the corpus calls its answer.";
  let cases = permission_tool_unmatched_cases();
  function answer(c) {
    let rule = property_get(c, "rule");
    let unmatched = permission_rule_tool_unmatched_is(rule);
    return unmatched;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "unmatched",
    "why",
    "permission tool unmatched",
  );
  return r;
}
