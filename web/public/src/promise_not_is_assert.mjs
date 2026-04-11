import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { promise_not_is } from "../../../love/public/src/promise_not_is.mjs";
export function promise_not_is_assert(ast) {
  let n = promise_not_is(ast);
  function lambda2() {
    let r = {
      ast,
    };
    return r;
  }
  assert_json_get(n, lambda2);
  return n;
}
