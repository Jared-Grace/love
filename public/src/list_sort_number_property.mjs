import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { property_get_curry_right } from "../../../love/public/src/property_get_curry_right.mjs";
export function list_sort_number_property(list) {
  let f = property_get_curry_right("delta");
  list_sort_number_mapper(list, f);
}
