import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property_curried } from "../../../love/public/src/list_map_property_curried.mjs";
export function list_map_property_multiple(rules_used, properties) {
  let r3 = list_map_property_curried(rules_used);
  let mapped3 = list_map(properties, r3);
  return mapped3;
}
