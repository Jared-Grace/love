import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_includes_all_assert } from "../../../love/public/src/list_includes_all_assert.mjs";
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
  return;
  ("the following code was used to make sure each rule was used somewhere in a goal - however became too much to sort through for expression rule sets");
  let squashed = list_squash(dfss);
  let paths = list_map(squashed, app_replace_rule_set_verify_path_get);
  let squashed2 = list_squash(paths);
  let mapped = list_map_properties(squashed2, ["rule", "original"]);
  let unique = list_unique(mapped);
  let rules = property_get(rule_set, "rules");
  let value = property_get_or_null(rule_set, "rules_unused");
  if (null_not_is(value)) {
    rules = list_difference(rules, value);
  }
  list_includes_all_assert(rules, unique);
}
