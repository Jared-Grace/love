import { negative_not_is_assert } from "./negative_not_is_assert.mjs";
import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
import { subtract } from "./subtract.mjs";
export function take_end_count_generic(list, count, size_get) {
  integer_is_assert_json(count, {
    hint: "the count of items to take should be a whole number — did a non-integer count arrive?",
  });
  let end = size_get(list);
  let c = subtract(end, count);
  negative_not_is_assert(c);
  return c;
}
