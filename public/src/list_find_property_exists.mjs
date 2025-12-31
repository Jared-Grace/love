import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
export function list_find_property_exists(list, property, value) {
  let f = list_filter_property(list, property, value);
  let s1 = list_size_1(f);
  return s1;
}
