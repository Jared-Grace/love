import { assert_json_get } from "./assert_json_get.mjs";
import { promise_not_is } from "./promise_not_is.mjs";
export function promise_not_is_assert(object) {
  let n = promise_not_is(object);
  function lambda() {
    let r = {
      object,
    };
    return r;
  }
  assert_json_get(n, lambda);
}
