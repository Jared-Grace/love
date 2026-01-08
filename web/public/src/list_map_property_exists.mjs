import { list_filter_property_exists } from "../../../love/public/src/list_filter_property_exists.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_map_property_exists(list, property_name) {
  let filtered = list_filter_property_exists(list, property_name);
  marker("1");
  let mapped = list_map_property(filtered, property_name);
  return mapped;
}
