import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { permission_self_settings_cases } from "./permission_self_settings_cases.mjs";
import { permission_rule_self_settings_blocked_is } from "./permission_rule_self_settings_blocked_is.mjs";
import { property_get } from "./property_get.mjs";
export function permission_self_settings_gate_run() {
  "Gate: the written-down rules must each get the answer the corpus declares. The audit built on this judgment reads the live settings files, where a correct answer and a broken one both come back empty today, so this is the only place a mistake in it can be seen. Throws so the dispatcher seam exits nonzero.";
  let cases = permission_self_settings_cases();
  function answer(c) {
    let rule = property_get(c, "rule");
    let blocked = permission_rule_self_settings_blocked_is(rule);
    return blocked;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "blocked",
    "why",
    "permission self settings",
  );
  return r;
}
