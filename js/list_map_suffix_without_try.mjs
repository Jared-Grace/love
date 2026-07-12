import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_suffix_without_try(list, suffix) {
  function lambda(item) {
    let result = text_suffix_without_try(item, suffix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
