import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
export function list_map_prefix_without(list, prefix) {
  function lambda(item) {
    let result = text_prefix_without(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
