import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { list_slice_count } from "../../../love/public/src/list_slice_count.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_replace_rule_valid(rule, index_selected, current_list) {
  let left = object_property_get(rule, "left");
  let size = list_size(left);
  index_selected;
  current_list;
  let sliced = list_slice_count(current_list, index_selected, size);
  let eq = json_equal(left, sliced);
  return eq;
}
