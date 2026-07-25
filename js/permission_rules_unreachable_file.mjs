export async function permission_rules_unreachable_file() {
  "audit: every file-tool allow rule that a hook denies outright, so the grant can never fire";
  "a hook decides before the permission engine is consulted, and its deny is final, so a rule granting a path the hook refuses is not a weaker grant but a dead one: nothing it says can ever take effect";
  "only a deny counts. a hook that abstains leaves the rule to the permission engine, which is the normal case for almost every path, so treating silence as failure would condemn nearly every rule in the file";
  let rules = await permission_rules();
  let tools = permission_file_tools();
  let offenders = [];
  for (let rule of rules) {
    let tool = permission_rule_tool_name(rule);
    let b = list_includes(tools, tool);
    if (not(b)) {
      continue;
    }
    let path = permission_rule_path_probe(rule);
    if (text_empty_is(path)) {
      continue;
    }
    let verdict = await memory_hook_check(tool, path);
    let decision = property_get(verdict, "decision");
    let b2 = equal(decision, "deny");
    if (b2) {
      list_add(offenders, {
        rule,
        command: path,
        decision,
        by: "memory hook",
      });
    }
  }
  return offenders;
}
