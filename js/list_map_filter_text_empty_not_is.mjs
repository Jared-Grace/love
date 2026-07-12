import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_filter_text_empty_not_is(list) {
  let mapped = list_map(list, list_filter_text_empty_not_is);
  return mapped;
}
