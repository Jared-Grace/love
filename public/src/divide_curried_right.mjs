import { divide } from "../../../love/public/src/divide.mjs";
export function divide_curried_right(bottom) {
  return function divide_curried_right_result(top) {
    return divide(top, bottom);
  };
}
