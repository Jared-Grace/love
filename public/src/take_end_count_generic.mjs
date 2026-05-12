import { negative_not_is_assert } from "../../../love/public/src/negative_not_is_assert.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
export function take_end_count_generic(count, size_get, list) {
  integer_is_assert(count);
  let end = size_get(list);
  let c = end - count;
  negative_not_is_assert(c);
  return c;
}
