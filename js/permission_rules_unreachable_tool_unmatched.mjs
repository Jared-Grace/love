import { permission_rule_tool_unmatched_is } from "./permission_rule_tool_unmatched_is.mjs";
import { permission_rules } from "./permission_rules.mjs";
import { permission_rule_path_probe } from "./permission_rule_path_probe.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function permission_rules_unreachable_tool_unmatched() {
  "audit: every allow rule granting a file-editing tool the permission engine never matches, so the grant can never fire whatever path it names";
  "the engine matches a file tool against Edit rules alone, and Edit covers every file-editing tool. so such a rule is not a narrower grant than its Edit twin but a dead one: with the twin beside it the rule says nothing the twin does not already say, and without the twin it says nothing at all";
  "this is a fourth decider, and the only one that needs no probe. the bash guard, the file-path hook and the self-settings guard each have to be asked about a particular path before they answer, whereas these are unreachable by tool name alone";
  "the judgment itself lives next door, one rule in and yes or no out, which is what lets a corpus hand it rules nobody has written down. this sweep comes back empty on a healthy repo, so on its own it could never tell a working judgment from a broken one";
  let rules = await permission_rules();
  let offenders = [];
  for (let rule of rules) {
    let granted_here = permission_rule_tool_unmatched_is(rule);
    if (not(granted_here)) {
      continue;
    }
    let path = permission_rule_path_probe(rule);
    list_add(offenders, {
      rule,
      command: path,
      decision: "ask",
      by: "permission engine",
    });
  }
  return offenders;
}
