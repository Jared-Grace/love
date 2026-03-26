import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { positive_is } from "../../../love/public/src/positive_is.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_replace_rule_set_verify_goal_path } from "../../../love/public/src/app_replace_rule_set_verify_goal_path.mjs";
export function app_replace_rule_set_rules_used(
  rules_parsed,
  start,
  end,
  rules_used,
) {
  let path = app_replace_rule_set_verify_goal_path(rules_parsed, start, end);
  let mapped = list_map_property(path, "rule");
  rules_used = list_unique(mapped);
  let size = list_size(rules_used);
  let number_to_add = 3 - size;
  let p = positive_is(number_to_add);
  log(app_replace_rule_set.name, {
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
