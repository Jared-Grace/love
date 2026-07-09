import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_properties } from "../../../love/public/src/list_map_properties.mjs";
export function list_map_properties_unique(squashed, properties) {
  let mapped = list_map_properties(squashed, properties);
  let unique = list_unique(mapped);
  return unique;
}
