import { list_find_starts_with_prefixes } from "../../../love/public/src/list_find_starts_with_prefixes.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
export function list_map_prefix_without_any(list, prefixes) {
  function lambda(item) {
    let prefix = list_find_starts_with_prefixes(prefixes, item);
    let result = text_prefix_without(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
