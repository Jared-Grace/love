import { equal } from "../../../love/public/src/equal.mjs";
export function equal_curried(left) {
  return function equal_curried_result(right) {
    return equal(left, right);
  };
}
