import { assert_left_right } from "./assert_left_right.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function greater_than_equal_assert(left, right) {
  let b = greater_than_equal(left, right);
  assert_left_right(b, left, right);
}
