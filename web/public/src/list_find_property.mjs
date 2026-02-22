import { property_equals_curry_right_2 } from "../../../love/public/src/property_equals_curry_right_2.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_find_property(list, property_name, property_value) {
  let filter = property_equals_curry_right_2(property_name, property_value);
  let item = list_find(list, filter);
  return item;
}
