import { list_filter_empty_not_is } from "./list_filter_empty_not_is.mjs";
import { marker } from "./marker.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_filter_string_empty_not_is(list) {
  marker("1");
  let mapped4 = list_map(list, list_filter_empty_not_is);
  return mapped4;
}
