import { js_call_is_assert } from "./js_call_is_assert.mjs";
import { js_special_arguments } from "./js_special_arguments.mjs";
import { property_get } from "./property_get.mjs";
export function js_call_arguments_get(node_call) {
  js_call_is_assert(node_call);
  let property_name = js_special_arguments();
  let args = property_get(node_call, property_name);
  return args;
}
