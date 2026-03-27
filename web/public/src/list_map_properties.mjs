import { each } from "../../../love/public/src/each.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function list_map_properties(list, properties) {
  let mapped = list;
  function lambda(p) {
    mapped = list_map_property(mapped, p);
  }
  each(properties, lambda);
  return mapped;
}
