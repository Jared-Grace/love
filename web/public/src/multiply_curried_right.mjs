import { multiply } from "../../../love/public/src/multiply.mjs";
export function multiply_curried_right(right) {
  let r = function multiply_curried_right_result(left) {
    let p = multiply(left, right);
    return p;
  };
  return r;
}
