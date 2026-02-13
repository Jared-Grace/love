import { multiply } from "../../../love/public/src/multiply.mjs";
export function multiply_curried_right(right) {
  return function multiply_curried_right_result(left) {
    return multiply(left, right);
  };
}
