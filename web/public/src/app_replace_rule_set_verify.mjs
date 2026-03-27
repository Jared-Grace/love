import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_set_verify_goal } from "../../../love/public/src/app_replace_rule_set_verify_goal.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_rule_set_verify(rule_set) {
  log(app_replace_rule_set_verify.name, {
    rule_set,
  });
  let rules_parsed = app_replace_rule_set_rules_get(rule_set);
  let goals = property_get(rule_set, "goals");
  function lambda2(goal) {
    let dfs = app_replace_rule_set_verify_goal(goal, rules_parsed);
    return dfs;
  }
  let mapped = list_map(goals, lambda2);
  return mapped;
}
