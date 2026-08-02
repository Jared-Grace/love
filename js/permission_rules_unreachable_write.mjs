import { permission_rules } from "./permission_rules.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { permission_rule_path_probe } from "./permission_rule_path_probe.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function permission_rules_unreachable_write() {
  "audit: every allow rule granting the Write tool by path, which the permission engine never consults for a file tool, so the grant can never fire";
  "the engine matches a file tool against Edit rules alone, and Edit covers every file-editing tool including Write. so a Write rule is not a narrower grant than its Edit twin but a dead one: with the twin beside it the rule says nothing the twin does not already say, and without the twin it says nothing at all";
  "this is a fourth decider, and the only one that needs no probe. the bash guard, the file-path hook and the self-settings guard each have to be asked about a particular path before they answer, whereas a Write rule is unreachable by its tool name alone, whatever path it carries";
  let rules = await permission_rules();
  let offenders = [];
  let tool_unmatched = "Write";
  for (let rule of rules) {
    let tool = permission_rule_tool_name(rule);
    let granted_here = equal(tool, tool_unmatched);
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
