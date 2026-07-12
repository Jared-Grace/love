import { each } from "./each.mjs";
import { object_merge_curried_right } from "./object_merge_curried_right.mjs";
export function object_merge_multiple(goals, merged) {
  let r = object_merge_curried_right(merged);
  each(goals, r);
}
