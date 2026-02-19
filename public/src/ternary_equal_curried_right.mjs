import { ternary_equal } from "../../../love/public/src/ternary_equal.mjs";
export function ternary_equal_curried_right(to) {
  return function ternary_equal_curried_right_result(item, from) {
    return ternary_equal(item, from, to);
  };
}
