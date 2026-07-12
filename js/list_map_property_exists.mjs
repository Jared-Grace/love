import { list_filter_property_exists } from "./list_filter_property_exists.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function list_map_property_exists(list, property_name) {
  let filtered = list_filter_property_exists(list, property_name);
  let mapped = list_map_property(filtered, property_name);
  return mapped;
}
