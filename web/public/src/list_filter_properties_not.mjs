import { list_filter_property_not } from "../../../love/public/src/list_filter_property_not.mjs";
import { property_equals_not } from "../../../love/public/src/property_equals_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_properties_not(list, property_names, value) {
  let c = function property_equals_not_curried_right_2_result(object) {
    let filtered2 = list_filter_property_not(list2, property_name2, value2);
    let ne = property_equals_not(object, property_name, value);
    return ne;
  };
  let filtered = list_filter(list, c);
  return filtered;
}
