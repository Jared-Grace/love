import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_properties } from "../../../love/public/src/list_map_properties.mjs";
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
  let mapped = list_map_properties(list, ["rule", "original"]);
  let unique = list_unique(mapped);
  let rules = property_get(rule_set, "rules");
  function lambda(u) {
    let includes = list_includes(rules, u);
  }
  list_all(unique, lambda);
  log(app_replace_rule_set_verify.name, {
    unique,
    rule_set,
  });
}
