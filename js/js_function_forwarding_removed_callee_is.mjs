import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_function_forwarding_removed_callee_is(site) {
  arguments_assert(arguments, 1);
  let call = property_get(site, "call");
  let callee = property_get(call, "callee");
  let callee_is = js_node_type_is(callee, "Identifier");
  return {
    callee,
    callee_is,
  };
}
