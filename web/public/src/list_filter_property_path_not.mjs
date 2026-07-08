import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { property_path_get } from "../../../love/public/src/property_path_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_property_path_not(list, property_names, value) {
  let c = function property_equals_not_curried_right_2_result(item) {
    let result = property_path_get(item, property_names);
    let ne = equal_not(left, right);
    return result;
  };
  let filtered = list_filter(list, c);
  return filtered;
}
