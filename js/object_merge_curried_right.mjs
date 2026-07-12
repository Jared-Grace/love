import { object_merge_set } from "./object_merge_set.mjs";
export function object_merge_curried_right(from) {
  let r = function object_merge_curried_right_result(to) {
    let to2 = object_merge_set(to, from);
    return to2;
  };
  return r;
}
