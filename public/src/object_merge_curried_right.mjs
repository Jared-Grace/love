import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function object_merge_curried_right(from) {
  let r = function object_merge_curried_right_result(to) {
    let to2 = object_merge(to, from);
    return to2;
  };
  return r;
}
