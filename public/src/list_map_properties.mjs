import { each } from "../../../love/public/src/each.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function list_map_properties(list, properties) {
  function lambda(p) {
    list = list_map_property(list, p);
  }
  each(properties, lambda);
  return list;
}
