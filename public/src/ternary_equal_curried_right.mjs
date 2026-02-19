import { ternary_equal } from "../../../love/public/src/ternary_equal.mjs";
export function ternary_equal_curried_right(to) {
  let r = function ternary_equal_curried_right_result(item, from) {
    let result = ternary_equal(item, from, to);
    return result;
  };
  return r;
}
