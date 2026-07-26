export function permission_allow_generated() {
  "every allow rule the shared settings file should hold, built from the one list of granted function names rather than written twice";
  "a second entry point of the shape `node scripts/ai.mjs <command> <fn> <args>` needs its own rule per function, or a single rule naming just the command grants it for all of them. Deriving both families from the same list is what stops those two lists drifting apart, which is the whole reason this is generated at all.";
  let rules = [];
  let other = permission_rules_other();
  list_add_multiple(rules, other);
  let names = permission_grant_names();
  for (let name of names) {
    let rule = permission_grant_rule(name);
    list_add(rules, rule);
  }
  let commands = dispatcher_commands_fn_named();
  for (let command of commands) {
    for (let name of names) {
      let rule = permission_grant_rule_command(command, name);
      list_add(rules, rule);
    }
  }
  return rules;
}
