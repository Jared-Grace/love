import { greater_than } from "../../../love/public/src/greater_than.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_size_less_1(s) {
  let sz = string_size(s);
  let l = greater_than(sz, 0);
  assert(l);
  const sz1 = sz - 1;
  return sz1;
}
