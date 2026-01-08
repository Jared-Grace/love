import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_map_property_exists(list, property_name) {
  function lambda(item) {
    let exists = object_property_exists(item, property_name);
    return exists;
  }
  let filtered = list_filter(list, lambda);
  marker("1");
  let mapped = list_map_property(list, property_name);
  return mapped;
}
