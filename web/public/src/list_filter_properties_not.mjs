import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { property_equals_not } from "../../../love/public/src/property_equals_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_properties_not(list, property_names, value) {
  let c = function property_equals_not_curried_right_2_result(item) {
    function lambda(value, property_name) {
      let value2 = property_get(object, property_name2);
    }
    let value3 = list_reduce(property_names, lambda, item);
    let ne = property_equals_not(item, property_name, value);
    return ne;
  };
  let filtered = list_filter(list, c);
  return filtered;
}
