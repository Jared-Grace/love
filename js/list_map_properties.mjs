import { each } from "./each.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function list_map_properties(list, properties) {
  let mapped = list;
  function lambda(p) {
    mapped = list_map_property(mapped, p);
  }
  each(properties, lambda);
  return mapped;
}
