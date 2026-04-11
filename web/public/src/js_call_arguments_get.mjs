import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { js_call_is } from "../../../love/public/src/js_call_is.mjs";
import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_call_arguments_get(node_call) {
  let property_name = js_special_arguments();
  let value = property_get(node_call, property_name);
  return value;
  js_call_is(node_call);
  function lambda2() {
    let r = {
      node: node_call,
    };
    return r;
  }
  assert_json_get(b, lambda2);
}
