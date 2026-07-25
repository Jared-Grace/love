export async function permission_rules_unreachable_bash() {
  "audit: every Bash allow rule the guard does not actually auto-approve, so the rule silently never applies and the command still prompts";
  "a rule is matched against the VERB the guard computes, not the text you typed. that fold drops a leading directory option from a version-control command and keeps the dispatcher path spelling, so a rule can look right and still be unreachable";
  let rules = await permission_rules();
  let offenders = [];
  for (let rule of rules) {
    let command = permission_rule_command_probe(rule);
    if (text_empty_is(command)) {
      continue;
    }
    let verdict = await guard_check(command);
    let decision = property_get(verdict, "decision");
    let b = equal(decision, "allow");
    if (not(b)) {
      list_add(offenders, {
        rule,
        command,
        decision,
        by: "bash guard",
      });
    }
  }
  return offenders;
}
