import { assert_json } from "./assert_json.mjs";
import { promise_not_is } from "./promise_not_is.mjs";
export function promise_not_is_assert(object) {
  let n = promise_not_is(object);
  let r = {
    object,
  };
  assert_json(n, r);
}
