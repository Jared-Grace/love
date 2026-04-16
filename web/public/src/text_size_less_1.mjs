import { at_least_assert } from "../../../love/public/src/at_least_assert.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function text_size_less_1(s) {
  let sz = text_size(s);
  at_least_assert(sz, 1);
  const sz1 = sz - 1;
  return sz1;
}
