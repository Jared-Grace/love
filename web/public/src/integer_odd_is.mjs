import { integer_even_is } from "../../../love/public/src/integer_even_is.mjs";
export function integer_odd_is(n) {
  let e = integer_even_is(n);
  let o = e === 1;
  return o;
}
