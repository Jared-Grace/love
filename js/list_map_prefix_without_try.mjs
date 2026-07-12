import { text_prefix_without_try } from "./text_prefix_without_try.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_prefix_without_try(list, prefix) {
  function lambda(item) {
    let result = text_prefix_without_try(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
