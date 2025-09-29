import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
export function list_map_prefix_without_any(list, prefixes) {
  marker("1");
  function lambda(item) {
    let prefix = list_find_starts_with(item, prefixes);
    let result = string_prefix_without(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
