import { marker } from "./marker.mjs";
import { list_map } from "./list_map.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function list_map_prefix_without_any(list, prefix) {
  marker("1");
  function lambda(item) {
    let result = string_prefix_without(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
