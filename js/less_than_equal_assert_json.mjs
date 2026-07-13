import { assert_json } from "./assert_json.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function less_than_equal_assert_json(a, b, json) {
  let le = less_than_equal(a, b);
  assert_json(le, {
    a,
    b,
    json,
  });
}
