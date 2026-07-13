import { assert_json } from "./assert_json.mjs";
import { at_least } from "./at_least.mjs";
export function at_least_assert_json(left, right, json) {
  let l = at_least(left, right);
  assert_json(l, {
    left,
    right,
    json,
  });
}
