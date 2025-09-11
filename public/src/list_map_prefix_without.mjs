import { list_map } from "./list_map.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function list_map_prefix_without(list, prefix) {
  function lambda(item) {
    let result = string_prefix_without(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
