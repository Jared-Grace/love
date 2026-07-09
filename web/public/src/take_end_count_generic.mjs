import { negative_not_is_assert } from "../../../love/public/src/negative_not_is_assert.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function take_end_count_generic(list, count, size_get) {
  integer_is_assert(count);
  let end = size_get(list);
  let c = subtract(end, count);
  negative_not_is_assert(c);
  return c;
}
