import { list_skip_end_count } from "../../../love/public/src/list_skip_end_count.mjs";
export function list_skip_end_count_curried_right(count) {
  return function list_skip_end_count_curried_right_result(list) {
    return list_skip_end_count(list, count);
  };
}
