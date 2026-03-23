import { add } from "../../../love/public/src/add.mjs";
export function add_curried_right(right) {
  return function add_curried_right_result(left) {
    return add(left, right);
  };
}
