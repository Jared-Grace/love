import { list_map_property } from "./list_map_property.mjs";
export function list_map_property_fn(list, fn) {
  let property_name = fn();
  let mapped = list_map_property(list, property_name);
  return mapped;
}
