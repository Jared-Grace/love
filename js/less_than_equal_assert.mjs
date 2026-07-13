import { assert_message } from "./assert_message.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function less_than_equal_assert(a, b) {
  let le = less_than_equal(a, b);
  assert_message(
    le,
    "The first value was expected to be less than or equal to the second. Would you like to check their order?",
  );
}
