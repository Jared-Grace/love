import { list_filter } from "./list_filter.mjs";
import { object_includes_curried_right } from "./object_includes_curried_right.mjs";
export function list_filter_object_includes(list, object) {
  let lambda = object_includes_curried_right(object);
  let npcs_matched = list_filter(list, lambda);
  return npcs_matched;
}
