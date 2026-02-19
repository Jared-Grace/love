import { change_if_equal } from "../../../love/public/src/change_if_equal.mjs";
export function change_if_equal_curried_right_2(from, to) {
  return function change_if_equal_curried_right_2_result(item) {
    return change_if_equal(item, from, to);
  };
}
