import { add } from "../../../love/public/src/add.mjs";
export function add_curried(left) {
  return function add_curried_result(right) {
    return add(left, right);
  };
}
