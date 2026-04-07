import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function equal_not_curried(left) {
  return function equal_not_curried_result(right) {
    return equal_not(left, right);
  };
}
