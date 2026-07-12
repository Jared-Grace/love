import { list_map_property } from "./list_map_property.mjs";
import { list_filter_property_exists } from "./list_filter_property_exists.mjs";
export function list_filter_property_exists_map(list, property_name) {
  let filtered = list_filter_property_exists(list, property_name);
  let mapped = list_map_property(filtered, property_name);
  return mapped;
}
