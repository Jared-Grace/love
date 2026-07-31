import { probes_offenders } from "./probes_offenders.mjs";
import { permission_rules } from "./permission_rules.mjs";
import { permission_file_tools } from "./permission_file_tools.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { permission_rule_path_probe } from "./permission_rule_path_probe.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { memory_hook_check } from "./memory_hook_check.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function permission_rules_unreachable_file() {
  "audit: every file-tool allow rule that a hook denies outright, so the grant can never fire";
  "a hook decides before the permission engine is consulted, and its deny is final, so a rule granting a path the hook refuses is not a weaker grant but a dead one: nothing it says can ever take effect";
  "only a deny counts. a hook that abstains leaves the rule to the permission engine, which is the normal case for almost every path, so treating silence as failure would condemn nearly every rule in the file";
  let rules = await permission_rules();
  let tools = permission_file_tools();
  async function offence_or_null(rule) {
    let tool = permission_rule_tool_name(rule);
    let judged_here = list_includes(tools, tool);
    if (not(judged_here)) {
      return null;
    }
    let path = permission_rule_path_probe(rule);
    let unprobeable = text_empty_is(path);
    if (unprobeable) {
      return null;
    }
    let verdict = await memory_hook_check(tool, path);
    let decision = property_get(verdict, "decision");
    let refused = equal(decision, "deny");
    if (not(refused)) {
      return null;
    }
    let offence = {
      rule,
      command: path,
      decision,
      by: "memory hook",
    };
    return offence;
  }
  let offenders = await probes_offenders(rules, offence_or_null);
  return offenders;
}
