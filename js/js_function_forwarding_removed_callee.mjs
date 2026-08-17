import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_forwarding_removed_callee_is } from "./js_function_forwarding_removed_callee_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_forwarding_removed_callee(site) {
  arguments_assert(arguments, 1);
  let r = js_function_forwarding_removed_callee_is(site);
  let callee_is = property_get(r, "callee_is");
  let callee = property_get(r, "callee");
  let r2 = {
    callee_is,
    callee,
  };
  return r2;
}
