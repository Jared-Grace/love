import { marker } from "../../../love/public/src/marker.mjs";
import { list_sort_string_mapper } from "../../../love/public/src/list_sort_string_mapper.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function list_sort_string_property(property_name, languages) {
  marker("1");
  function lambda10(item) {
    let value = object_property_get(item, property_name);
  }
  list_sort_string_mapper(languages, lambda10);
}
