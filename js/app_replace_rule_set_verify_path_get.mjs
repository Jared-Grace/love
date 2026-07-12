import { list_skip_1 } from "./list_skip_1.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_linked_to_list } from "./list_linked_to_list.mjs";
import { app_replace_rule_set_verify_goal_depth_max } from "./app_replace_rule_set_verify_goal_depth_max.mjs";
export function app_replace_rule_set_verify_path_get(dfs) {
  let max_depth = app_replace_rule_set_verify_goal_depth_max();
  let property_name = "previous";
  let list = list_linked_to_list(dfs, property_name, max_depth);
  let path_all = list_map_property(list, "data");
  list_reverse(path_all);
  let path = list_skip_1(path_all);
  return path;
}
