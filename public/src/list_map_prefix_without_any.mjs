import { list_filter_starts_with_any } from "./list_filter_starts_with_any.mjs";
import { marker } from "./marker.mjs";
import { list_map } from "./list_map.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function list_map_prefix_without_any(list, prefixes) {
  marker("1");
  function lambda(item) {
    let verse_references = list_filter_starts_with_any(prefixes2, list2);
    let result = string_prefix_without(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
