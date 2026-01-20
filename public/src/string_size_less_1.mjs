import { greater_than_or_equal_assert } from "../../../love/public/src/greater_than_or_equal_assert.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_size_less_1(s) {
  let sz = string_size(s);
  const right = 1;
  let left = sz;
  greater_than_or_equal_assert(left, right);
  const sz1 = sz - 1;
  return sz1;
}
