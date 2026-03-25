import { each } from "../../../love/public/src/each.mjs";
import { object_merge_curried_right } from "../../../love/public/src/object_merge_curried_right.mjs";
export function object_merge_multiple(merged, goals) {
  let r = object_merge_curried_right(merged);
  each(goals, r);
}
