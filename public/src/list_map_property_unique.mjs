import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function list_map_property_unique(list, property_name) {
  let mapped = list_map_property(list, property_name);
  let unique = list_unique(mapped);
  return unique;
}
