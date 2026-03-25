import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_wrap_curried_right } from "../../../love/public/src/object_wrap_curried_right.mjs";
export function object_wrap_multiple(property_name, goals) {
  let r = object_wrap_curried_right(property_name);
  let mapped = list_map(goals, r);
  return mapped;
}
