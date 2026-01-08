import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_map_property_exists(list, property_name) {
  let filtered = list_filter(list2, function lambda(item) {});
  marker("1");
  let mapped = list_map_property(list, property_name);
  return mapped;
}
