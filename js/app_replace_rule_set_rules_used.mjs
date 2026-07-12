import { list_shuffle } from "./list_shuffle.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_difference } from "./list_difference.mjs";
import { log } from "./log.mjs";
import { positive_is } from "./positive_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_replace_rule_set_verify_goal_path } from "./app_replace_rule_set_verify_goal_path.mjs";
import { subtract } from "./subtract.mjs";
export function app_replace_rule_set_rules_used(rules_parsed, start, end) {
  let path = app_replace_rule_set_verify_goal_path(rules_parsed, start, end);
  let mapped = list_map_property(path, "rule");
  let rules_used = list_unique(mapped);
  let size = list_size(rules_used);
  let number_to_add = subtract(3, size);
  let p = positive_is(number_to_add);
  log(app_replace_rule_set_rules_used.name, {
    number_to_add,
    path,
  });
  if (p) {
    let difference = list_difference(rules_parsed, rules_used);
    let taken = list_shuffle_take(difference, number_to_add);
    list_add_multiple(rules_used, taken);
  }
  list_shuffle(rules_used);
  return rules_used;
}
