import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function object_merge_curried_right(from) {
  return function object_merge_curried_right_result(to) {
    return object_merge(to, from);
  };
}
