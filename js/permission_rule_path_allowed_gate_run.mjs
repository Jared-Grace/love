import { arguments_assert } from "./arguments_assert.mjs";
import { permission_rule_path_allowed_cases } from "./permission_rule_path_allowed_cases.mjs";
import { permission_rule_path_allowed_is } from "./permission_rule_path_allowed_is.mjs";
import { property_get } from "./property_get.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function permission_rule_path_allowed_gate_run() {
  "QA gate: the reading a hook grants file tools by answers every case its corpus writes down the way the corpus says.";
  "This is the only place the reading can be seen working. Its whole job is to say yes early - before the permission engine has noticed a new rule at all - and a yes it stopped giving looks from the outside exactly like a session that has not restarted yet: the human is asked, they say yes, and nothing anywhere is red. A yes it gave wrongly is quieter still.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = permission_rule_path_allowed_cases();
  function answer(c) {
    let rule = property_get(c, "rule");
    let tool = property_get(c, "tool");
    let path = property_get(c, "path");
    let allowed = permission_rule_path_allowed_is(rule, tool, path);
    return allowed;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "allowed",
    "why",
    "permission rule path allowed",
  );
  return r;
}
