import { permission_rules } from "./permission_rules.mjs";
import { permission_rule_self_settings_blocked_is } from "./permission_rule_self_settings_blocked_is.mjs";
import { permission_rule_path_probe } from "./permission_rule_path_probe.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function permission_rules_unreachable_self_settings() {
  "audit: every allow rule that would let a tool WRITE inside Claude Code's own configuration folder, which a built-in guard prompts for whatever the settings say";
  "the guard is not a permission rule and no permission rule outranks it. it offers the human a grant that lasts only the session, so the prompt returns next session, and the allow rule sitting in the file reads as if it were handled. that silent lie is the whole reason to name these";
  "which rules qualify is decided one rule at a time next door, so the corpus can test that judgment on rules nobody has written into the settings files";
  let rules = await permission_rules();
  let offenders = [];
  for (let rule of rules) {
    let b = permission_rule_self_settings_blocked_is(rule);
    if (not(b)) {
      continue;
    }
    let path = permission_rule_path_probe(rule);
    list_add(offenders, {
      rule,
      command: path,
      decision: "ask",
      by: "self-settings guard",
    });
  }
  return offenders;
}
