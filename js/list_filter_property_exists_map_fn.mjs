import { list_filter_property_exists_map } from "./list_filter_property_exists_map.mjs";
export function list_filter_property_exists_map_fn(list, fn) {
  let property_name = fn();
  let mapped = list_filter_property_exists_map(list, property_name);
  return mapped;
}
