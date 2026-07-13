import { assert_json } from "./assert_json.mjs";
import { positive_is } from "./positive_is.mjs";
export function positive_is_assert_json(n, json) {
  let p = positive_is(n);
  assert_json(p, {
    n,
    json,
  });
}
