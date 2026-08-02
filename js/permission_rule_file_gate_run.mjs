import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { permission_rule_file_cases } from "./permission_rule_file_cases.mjs";
import { property_get } from "./property_get.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { permission_rule_path_probe } from "./permission_rule_path_probe.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function permission_rule_file_gate_run() {
  "Gate: each written-down rule must name the tool the corpus declares and yield the probe path it declares, or nothing where it declares nothing. The audit built on these two readings walks the live settings files, where no file rule is dead today, so a working reading and a broken one both come back with no offenders and this is the only place a mistake in either can be seen. Throws so the dispatcher seam exits nonzero.";
  "Both readings are checked here rather than in two gates, because the audit uses them in sequence and a rule that survives the first only to be dropped by the second is skipped just as silently as one dropped by the first.";
  let cases = permission_rule_file_cases();
  let failures = [];
  for (let c of cases) {
    let rule = property_get(c, "rule");
    let tool_expected = property_get(c, "tool");
    let path_expected = property_get(c, "path");
    let tool_actual = permission_rule_tool_name(rule);
    let path_actual = permission_rule_path_probe(rule);
    let tool_ok = equal(tool_expected, tool_actual);
    let path_ok = equal(path_expected, path_actual);
    let b = tool_ok && path_ok;
    let mark = gate_case_mark(b);
    console.log(mark + rule + "  ->  " + tool_actual + "  |  " + path_actual);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "permission rule file gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
