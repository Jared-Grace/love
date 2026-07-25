export function permission_rule_probe_gate_run() {
  "Gate: each written-down allow rule must yield the shell command the corpus declares, or nothing where the corpus declares nothing. The audit built on this reading walks the live settings files, where every rule is reachable today, so a right answer and a broken one both come back with no offenders and this is the only place a mistake in the reading can be seen. Throws so the dispatcher seam exits nonzero.";
  "A reader that answered with nothing for every rule would be the quietest way to break the audit: each rule would be skipped before the guard was ever asked, and the sweep would report a clean settings file it had not read.";
  let cases = permission_rule_probe_cases();
  let failures = [];
  for (let c of cases) {
    let rule = property_get(c, "rule");
    let expected = property_get(c, "command");
    let actual = permission_rule_command_probe(rule);
    let b = equal(expected, actual);
    let mark = b ? "pass  " : "FAIL  ";
    console.log(mark + rule + "  ->  " + actual);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  console.log(
    "\npass " +
      subtract(cases.length, failures.length) +
      "  fail " +
      failures.length,
  );
  if (greater_than(failures.length, 0)) {
    throw new Error(
      "permission rule probe gate: " + failures.length + " failed",
    );
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
