import { mod } from "../../../love/public/src/mod.mjs";
export function integer_even_is(n) {
  let m = 2;
  let e = mod(n, m);
  return e;
}
