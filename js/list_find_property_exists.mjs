import { list_size_1 } from "./list_size_1.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function list_find_property_exists(list, property, value) {
  let f = list_filter_property(list, property, value);
  let s = list_size_1(f);
  return s;
}
