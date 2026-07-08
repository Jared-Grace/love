import { property_equals_not } from "../../../love/public/src/property_equals_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_properties_not(list, property_names, value) {
  let c = function property_equals_not_curried_right_2_result(object) {
    let ne = property_equals_not(object, property_name, value);
    return ne;
  };
  let filtered = list_filter(list, c);
  return filtered;
}
