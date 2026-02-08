import { greater_than_or_equal_assert } from "../../../love/public/src/greater_than_or_equal_assert.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function string_size_less_1(s) {
  let sz = text_size(s);
  greater_than_or_equal_assert(sz, 1);
  const sz1 = sz - 1;
  return sz1;
}
