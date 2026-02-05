import { list_find_starts_with_prefixes } from "../../../love/public/src/list_find_starts_with_prefixes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_prefix_any(list, prefixes) {
  function lambda(item) {
    let prefix = list_find_starts_with_prefixes(prefixes, item);
    return prefix;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
