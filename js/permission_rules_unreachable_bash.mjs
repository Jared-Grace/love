import { permission_probe_limit } from "./permission_probe_limit.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { permission_rules } from "./permission_rules.mjs";
import { permission_rule_command_probe } from "./permission_rule_command_probe.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { guard_check } from "./guard_check.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export async function permission_rules_unreachable_bash() {
  "audit: every Bash allow rule the guard does not actually auto-approve, so the rule silently never applies and the command still prompts";
  "a rule is matched against the VERB the guard computes, not the text you typed. that fold drops a leading directory option from a version-control command and keeps the dispatcher path spelling, so a rule can look right and still be unreachable";
  "the rules are put to the guard several at a time. each one starts a fresh guard and waits for it to answer, and one rule after another was the slowest single question in the whole repo-wide gate while this machine sat idle through nearly all of it. no rule depends on another, and the answers are gathered in the order the rules were written, so the list reads exactly as it did";
  let rules = await permission_rules();
  async function offence_or_null(rule) {
    let command = permission_rule_command_probe(rule);
    let unprobeable = text_empty_is(command);
    if (unprobeable) {
      return null;
    }
    let verdict = await guard_check(command);
    let decision = property_get(verdict, "decision");
    let approved = equal(decision, "allow");
    if (approved) {
      return null;
    }
    let offence = {
      rule,
      command,
      decision,
      by: "bash guard",
    };
    return offence;
  }
  let limit = permission_probe_limit();
  let judged = await list_map_limited_async(rules, offence_or_null, limit);
  let offenders = list_filter_null_not_is(judged);
  return offenders;
}
