import { log } from "../../../love/public/src/log.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { promise_not_is } from "../../../love/public/src/promise_not_is.mjs";
export function promise_not_is_assert(object) {
  let n = promise_not_is(object);
  log(promise_not_is_assert.name, {
    object,
  });
  function lambda2() {
    let r = {
      object,
    };
    return r;
  }
  assert_json_get(n, lambda2);
}
