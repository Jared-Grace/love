import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { js_call_is } from "../../../love/public/src/js_call_is.mjs";
import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_call_arguments_get(node) {
  let property_name = js_special_arguments();
  let value = property_get(node, property_name);
  return value;
  js_call_is(node);
  function lambda2() {
    let r = {
      e: node,
    };
    return r;
  }
  assert_json_get(b, lambda2);
}
