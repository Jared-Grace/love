import { list_filter_empty_not_is } from "./list_filter_empty_not_is.mjs";
import { marker } from "./marker.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_filter_string_empty_not_is(list) {
  marker("1");
  function lambda(item) {
    let filtered = list_filter_empty_not_is(item);
    return filtered;
  }
  let mapped4 = list_map(list, lambda);
  return mapped4;
}
