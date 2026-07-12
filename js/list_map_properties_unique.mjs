import { list_unique } from "./list_unique.mjs";
import { list_map_properties } from "./list_map_properties.mjs";
export function list_map_properties_unique(squashed, properties) {
  let mapped = list_map_properties(squashed, properties);
  let unique = list_unique(mapped);
  return unique;
}
