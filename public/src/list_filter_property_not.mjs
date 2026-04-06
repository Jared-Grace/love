import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { property_equals_not_curried_right_2 } from "../../../love/public/src/property_equals_not_curried_right_2.mjs";
export function list_filter_property_not(list, property_name, value) {
  let r2 = property_equals_not_curried_right_2(property_name, value);
  let filtered = list_filter(list, r2);
  return filtered;
}
