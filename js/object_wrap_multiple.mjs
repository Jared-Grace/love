import { list_map } from "./list_map.mjs";
import { object_wrap_curried_right } from "./object_wrap_curried_right.mjs";
export function object_wrap_multiple(goals, property_name) {
  let r = object_wrap_curried_right(property_name);
  let mapped = list_map(goals, r);
  return mapped;
}
