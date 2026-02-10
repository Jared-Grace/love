import { property_get_curry_right } from "../../../love/public/src/property_get_curry_right.mjs";
import { list_sort_text_mapper } from "../../../love/public/src/list_sort_text_mapper.mjs";
export function list_sort_text_property(languages, property_name) {
  let f = property_get_curry_right(property_name);
  list_sort_text_mapper(languages, f);
}
