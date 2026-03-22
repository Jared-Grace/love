import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_linked_to_list } from "../../../love/public/src/list_linked_to_list.mjs";
import { app_replace_rule_set_verify_goal_depth_max } from "../../../love/public/src/app_replace_rule_set_verify_goal_depth_max.mjs";
import { app_replace_rule_set_verify_goal } from "../../../love/public/src/app_replace_rule_set_verify_goal.mjs";
export function app_replace_rule_set_verify_goal_path(goal, rules_parsed) {
  let dfs = app_replace_rule_set_verify_goal(goal, rules_parsed);
  let max_depth = app_replace_rule_set_verify_goal_depth_max();
  const property_name = "previous";
  let list3 = list_linked_to_list(dfs, property_name, max_depth);
  let mapped3 = list_map_property(list3, "data");
  list_reverse(mapped3);
  return mapped3;
}
