import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_properties_not(list, property_names, value) {
  let c = function property_equals_not_curried_right_2_result(item) {
    function lambda(value, property_name) {
      let value_next = property_get(value, property_name);
      return value_next;
    }
    let result = list_reduce(property_names, lambda, item);
    return result;
  };
  let filtered = list_filter(list, c);
  return filtered;
}
