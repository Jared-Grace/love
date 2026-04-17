import { mod } from "../../../love/public/src/mod.mjs";
export function integer_evenness(n) {
  let m = 2;
  let e = mod(n, m);
  return e;
}
