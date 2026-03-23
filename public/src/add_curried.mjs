import { add } from "../../../love/public/src/add.mjs";
export function add_curried(left) {
  let r = function add_curried_result(right) {
    let sum = add(left, right);
    return sum;
  };
  return r;
}
