import { each } from "../../../love/public/src/each.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_replace_rule_set_verify_path_get } from "../../../love/public/src/app_replace_rule_set_verify_path_get.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { app_replace_rule_set_verify_goal_curried_right } from "../../../love/public/src/app_replace_rule_set_verify_goal_curried_right.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_rule_set_verify(rule_set) {
  log(app_replace_rule_set_verify.name, {
    rule_set,
  });
  let rules_parsed = app_replace_rule_set_rules_get(rule_set);
  let goals = property_get(rule_set, "goals");
  let r = app_replace_rule_set_verify_goal_curried_right(rules_parsed);
  let dfss = list_map(goals, r);
  let squashed = list_squash(dfss);
  log(app_replace_rule_set_verify.name, {
    squashed,
  });
  let paths = list_map(squashed, app_replace_rule_set_verify_path_get);
  let list = list_squash(paths);
  function lambda(p) {
    list = list_map_property(list, p);
  }
  each(properties, lambda);
  let mapped = list_map_property(list, "rule");
  let mapped2 = list_map_property(list, "original");
  log(app_replace_rule_set_verify.name, {
    mapped,
  });
  return dfss;
}
