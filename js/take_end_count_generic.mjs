import { negative_not_is_assert } from "./negative_not_is_assert.mjs";
import { integer_is_assert } from "./integer_is_assert.mjs";
import { subtract } from "./subtract.mjs";
export function take_end_count_generic(list, count, size_get) {
  integer_is_assert(count);
  let end = size_get(list);
  let c = subtract(end, count);
  negative_not_is_assert(c);
  return c;
}
