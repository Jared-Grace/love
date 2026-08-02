import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { permission_rule_probe_cases } from "./permission_rule_probe_cases.mjs";
import { property_get } from "./property_get.mjs";
import { permission_rule_command_probe } from "./permission_rule_command_probe.mjs";
export function permission_rule_probe_gate_run() {
  "Gate: each written-down allow rule must yield the shell command the corpus declares, or nothing where the corpus declares nothing. The audit built on this reading walks the live settings files, where every rule is reachable today, so a right answer and a broken one both come back with no offenders and this is the only place a mistake in the reading can be seen. Throws so the dispatcher seam exits nonzero.";
  "A reader that answered with nothing for every rule would be the quietest way to break the audit: each rule would be skipped before the guard was ever asked, and the sweep would report a clean settings file it had not read.";
  let cases = permission_rule_probe_cases();
  function answer(c) {
    let rule = property_get(c, "rule");
    let command = permission_rule_command_probe(rule);
    return command;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "command",
    "why",
    "permission rule probe",
  );
  return r;
}
