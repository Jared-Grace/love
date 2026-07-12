import { json_equal } from "./json_equal.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_valid(rule, index_selected, current_list) {
  let left = property_get(rule, "left");
  let size = list_size(left);
  let sliced = list_slice_count(current_list, index_selected, size);
  let eq = json_equal(left, sliced);
  return eq;
}
