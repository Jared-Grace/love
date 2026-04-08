import { list_skip } from "../../../love/public/src/list_skip.mjs";
export function list_skip_curried_right(skip_count) {
  return function list_skip_curried_right_result(list) {
    return list_skip(list, skip_count);
  };
}
