import {json_to} from "./json_to.mjs";
import {equal_by} from "./equal_by.mjs";
import {list_slice_count} from "./list_slice_count.mjs";
import {list_size} from "./list_size.mjs";
import {object_property_get} from "./object_property_get.mjs";
export function app_replace_rule_valid(rule, index_selected, current_list) {
  let left = object_property_get(rule, "left");
  let size = list_size(left);
  index_selected;
  current_list;
  let sliced = list_slice_count(current_list, index_selected, size);
  let eq = equal_by(left, sliced, json_to);
  return eq;
}
