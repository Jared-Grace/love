import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_properties } from "../../../love/public/src/list_map_properties.mjs";
export function list_map_properties_unique(squashed2, properties) {
  let mapped = list_map_properties(squashed2, properties);
  let unique = list_unique(mapped);
  return unique;
}
