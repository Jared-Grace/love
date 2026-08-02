import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { permission_self_settings_cases } from "./permission_self_settings_cases.mjs";
import { permission_rule_self_settings_blocked_is } from "./permission_rule_self_settings_blocked_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function permission_self_settings_gate_run() {
  "Gate: the written-down rules must each get the answer the corpus declares. The audit built on this judgment reads the live settings files, where a correct answer and a broken one both come back empty today, so this is the only place a mistake in it can be seen. Throws so the dispatcher seam exits nonzero.";
  let cases = permission_self_settings_cases();
  let failures = [];
  for (let c of cases) {
    let rule = property_get(c, "rule");
    let expected = property_get(c, "blocked");
    let actual = permission_rule_self_settings_blocked_is(rule);
    let b = equal(expected, actual);
    let mark = gate_case_mark(b);
    console.log(mark + rule + "  " + expected + " / " + actual);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "permission self settings gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
