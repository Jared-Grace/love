import { list_take_end_count } from "../../../love/public/src/list_take_end_count.mjs";
export function list_take_end_count_curried_right(count) {
  let r = function list_take_end_count_curried_right_result(list) {
    let result = list_take_end_count(list, count);
    return result;
  };
  return r;
}
