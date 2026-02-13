import { divide } from "../../../love/public/src/divide.mjs";
export function divide_curried_right(bottom) {
  let r = function divide_curried_right_result(top) {
    let r2 = divide(top, bottom);
    return r2;
  };
  return r;
}
