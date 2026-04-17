import { integer_evenness } from "../../../love/public/src/integer_evenness.mjs";
export function integer_odd_is(index) {
  let r2 = integer_evenness(index);
  let r4 = r2 === 1;
  return r4;
}
