import { mod } from "../../../love/public/src/mod.mjs";
export function integer_evenness(index) {
  let m = 2;
  let r2 = mod(index, m);
  return r2;
}
