import { negative_not_is_assert_json } from "./negative_not_is_assert_json.mjs";
import { integer_is_assert_json } from "./integer_is_assert_json.mjs";
import { subtract } from "./subtract.mjs";
export function take_end_count_generic(list, count, size_get) {
  integer_is_assert_json(count, {
    hint: "the count of items to take should be a whole number — did a non-integer count arrive?",
  });
  let end = size_get(list);
  let c = subtract(end, count);
  negative_not_is_assert_json(c, {
    hint: "taking this many from the end shouldn't go past the start of the list — is count within the list size?",
    count,
  });
  return c;
}
