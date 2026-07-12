import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
export function list_sort_number_property(list) {
  let f = property_get_curried_right("delta");
  list_sort_number_mapper(list, f);
}
