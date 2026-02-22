import { property_equals_curry_right_2 } from "../../../love/public/src/property_equals_curry_right_2.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_property(list, property_name, property_value) {
  let filter = property_equals_curry_right_2(property_name, property_value);
  let filtered = list_filter(list, filter);
  return filtered;
}
