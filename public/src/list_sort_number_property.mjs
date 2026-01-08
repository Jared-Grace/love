import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { object_property_get_curry_right } from "../../../love/public/src/object_property_get_curry_right.mjs";
export function list_sort_number_property(list) {
  let f = object_property_get_curry_right("delta");
  list_sort_number_mapper(list, f);
}
