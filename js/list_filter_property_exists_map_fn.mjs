import { list_map_property_exists } from "./list_map_property_exists.mjs";
export function list_filter_property_exists_map_fn(list, fn) {
  let property_name = fn();
  let mapped = list_map_property_exists(list, property_name);
  return mapped;
}
