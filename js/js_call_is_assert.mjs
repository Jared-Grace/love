import { assert_json_get } from "./assert_json_get.mjs";
import { js_call_is } from "./js_call_is.mjs";
export function js_call_is_assert(node_call) {
  let b = js_call_is(node_call);
  let r = {
    node_call,
  };
  assert_json(b, r);
}
