import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { js_call_is } from "../../../love/public/src/js_call_is.mjs";
export function js_call_is_assert(node_call) {
  let b = js_call_is(node_call);
  function lambda2() {
    let r = {
      node_call,
    };
    return r;
  }
  assert_json_get(b, lambda2);
}
