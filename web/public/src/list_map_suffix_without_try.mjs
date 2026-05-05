import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_suffix_without_try(list, prefix) {
  function lambda(item) {
    let result = text_suffix_without_try(item, prefix);
    return result;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
