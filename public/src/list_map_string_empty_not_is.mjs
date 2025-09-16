import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
export function list_map_string_empty_not_is(list) {
  function lambda(item) {
    let filtered = list_filter(item, string_empty_not_is);
    return filtered;
  }
  let mapped4 = list_map(list, lambda);
  return mapped4;
}
