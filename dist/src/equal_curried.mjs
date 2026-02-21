import { equal } from "../../../love/public/src/equal.mjs";
export function equal_curried(left) {
  let r = function equal_curried_result(right) {
    let eq = equal(left, right);
    return eq;
  };
  return r;
}
