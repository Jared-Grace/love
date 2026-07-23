import { list_map_squash } from "./list_map_squash.mjs";
import { list_map_properties_unique } from "./list_map_properties_unique.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_includes_all_assert_json } from "./list_includes_all_assert_json.mjs";
import { app_replace_rule_set_verify_path_get } from "./app_replace_rule_set_verify_path_get.mjs";
import { list_squash } from "./list_squash.mjs";
import { app_replace_rule_set_verify_goal_curried_right } from "./app_replace_rule_set_verify_goal_curried_right.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { property_get } from "./property_get.mjs";
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
  let squashed2 = list_map_squash(
    squashed,
    app_replace_rule_set_verify_path_get,
  );
  let properties = ["rule", "original"];
  let unique = list_map_properties_unique(squashed2, properties);
  let rules = property_get(rule_set, "rules");
  let value = property_get_or_null(rule_set, "rules_unused");
  if (null_not_is(value)) {
    rules = list_difference(rules, value);
  }
  list_includes_all_assert_json(rules, unique, {
    hint: "every rule used across the paths should be one of the rule set's rules",
  });
}
