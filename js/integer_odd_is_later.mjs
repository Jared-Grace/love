import { integer_odd_is } from "./integer_odd_is.mjs";
export function integer_odd_is_later(n) {
  let r = function integer_odd_is_later_result() {
    let v = integer_odd_is(n);
    return v;
  };
  return r;
}
