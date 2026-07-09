import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property_curried } from "../../../love/public/src/list_map_property_curried.mjs";
export function list_map_property_multiple(rules_used, properties) {
  let r = list_map_property_curried(rules_used);
  let mapped = list_map(properties, r);
  return mapped;
}
