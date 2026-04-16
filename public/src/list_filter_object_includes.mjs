import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_includes_curried_right } from "../../../love/public/src/object_includes_curried_right.mjs";
export function list_filter_object_includes(object, list) {
  let lambda17 = object_includes_curried_right(object);
  let npcs_matched = list_filter(list, lambda17);
  return npcs_matched;
}
