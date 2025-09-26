import { string_lower_to } from "./string_lower_to.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_lower(input) {
  let mapped = list_map(input, string_lower_to);
  return mapped;
}
