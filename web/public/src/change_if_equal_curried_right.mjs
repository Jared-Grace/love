import { change_if_equal } from "../../../love/public/src/change_if_equal.mjs";
export function change_if_equal_curried_right(to) {
  let r = function ternary_equal_curried_right_result(item, from) {
    let result = change_if_equal(item, from, to);
    return result;
  };
  return r;
}
