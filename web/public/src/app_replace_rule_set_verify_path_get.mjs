import { list_skip_1 } from "../../../love/public/src/list_skip_1.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_linked_to_list } from "../../../love/public/src/list_linked_to_list.mjs";
import { app_replace_rule_set_verify_goal_depth_max } from "../../../love/public/src/app_replace_rule_set_verify_goal_depth_max.mjs";
export function app_replace_rule_set_verify_path_get(dfs) {
  let max_depth = app_replace_rule_set_verify_goal_depth_max();
  const property_name = "previous";
  let list = list_linked_to_list(dfs, property_name, max_depth);
  let path = list_map_property(list, "data");
  list_reverse(path);
  let skipped = list_skip_1(path);
  return skipped;
}
