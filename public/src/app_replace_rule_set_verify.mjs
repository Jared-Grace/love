import { app_replace_rule_set_verify_from } from "../../../love/public/src/app_replace_rule_set_verify_from.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_rule_set_verify(rule_set_get) {
  let rs = rule_set_get();
  let rules_parsed = app_replace_rule_set_rules_get(rs);
  let goals = property_get(rs, "goals");
  function lambda2(goal) {
    let dfs = app_replace_rule_set_verify_from(goal, rules_parsed);
    return dfs;
  }
  each(goals, lambda2);
}
