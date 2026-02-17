import { list_take_end_count } from "../../../love/public/src/list_take_end_count.mjs";
export function list_take_end_count_curried_right(count) {
  return function list_take_end_count_curried_right_result(list) {
    return list_take_end_count(list, count);
  };
}
