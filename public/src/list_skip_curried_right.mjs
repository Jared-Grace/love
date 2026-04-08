import { list_skip } from "../../../love/public/src/list_skip.mjs";
export function list_skip_curried_right(skip_count) {
  let r = function list_skip_curried_right_result(list) {
    let skipped = list_skip(list, skip_count);
    return skipped;
  };
  return r;
}
