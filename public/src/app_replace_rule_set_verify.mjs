import { list_includes_all } from "../../../love/public/src/list_includes_all.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
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
  let squashed2 = list_squash(paths);
  let mapped = list_map_properties(squashed2, ["rule", "original"]);
  let unique = list_unique(mapped);
  let rules = property_get(rule_set, "rules");
  let includes_all = list_includes_all(rules, unique);
  function lambda2() {
    let r3 = {};
    return r3;
  }
  assert_json_get(includes_all, lambda2);
  log(app_replace_rule_set_verify.name, {
    unique,
    rules,
    all_rules_used: includes_all,
  });
}
