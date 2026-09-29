import { assert_left_right } from "../../***REMOVED***/js/assert_left_right.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function less_than_equal_assert(a, b) {
  let le = less_than_equal(a, b);
  assert_left_right(le, left, right);
}
