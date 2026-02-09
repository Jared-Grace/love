import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_filter_text_empty_not_is(list) {
  let mapped4 = list_map(list, list_filter_empty_not_is);
  return mapped4;
}
