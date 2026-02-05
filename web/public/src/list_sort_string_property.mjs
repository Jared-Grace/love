import { object_property_get_curry_right } from "../../../love/public/src/object_property_get_curry_right.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_sort_string_mapper } from "../../../love/public/src/list_sort_string_mapper.mjs";
export function list_sort_string_property(languages, property_name) {
  let f = object_property_get_curry_right(property_name);
  list_sort_string_mapper(languages, f);
}
