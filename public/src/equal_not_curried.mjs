import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function equal_not_curried(left) {
  let r = function equal_not_curried_result(right) {
    let ne = equal_not(left, right);
    return ne;
  };
  return r;
}
