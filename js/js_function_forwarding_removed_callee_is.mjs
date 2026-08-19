import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_function_forwarding_removed_callee_is(site) {
  arguments_assert(arguments, 1);
  let callee = property_path_get_2(site, "call", "callee");
  let callee_is = js_node_type_is(callee, "Identifier");
  let r = {
    callee,
    callee_is,
  };
  return r;
}
