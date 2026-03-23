import { add } from "../../../love/public/src/add.mjs";
export function add_curried_right(right) {
  let r = function add_curried_right_result(left) {
    let sum = add(left, right);
    return sum;
  };
  return r;
}
