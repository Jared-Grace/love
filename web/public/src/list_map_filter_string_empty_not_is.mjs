import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_filter_string_empty_not_is(list) {
  marker("1");
  let mapped4 = list_map(list, list_filter_empty_not_is);
  return mapped4;
}
