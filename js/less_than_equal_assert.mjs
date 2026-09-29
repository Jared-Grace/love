import { assert_left_right } from "./assert_left_right.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function less_than_equal_assert(left, right) {
  let le = less_than_equal(left, right);
  assert_left_right(le, left, right);
}
