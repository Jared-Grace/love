import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_forwarding_removed_holder_is } from "./js_function_forwarding_removed_holder_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_forwarding_removed_holder(stack) {
  arguments_assert(arguments, 1);
  let r3 = js_function_forwarding_removed_holder_is(stack);
  let holder_is = property_get(r3, "holder_is");
  let holder = property_get(r3, "holder");
  let r = {
    holder_is,
    holder,
  };
  return r;
}
