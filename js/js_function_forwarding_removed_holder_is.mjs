import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_is } from "./list_is.mjs";
export function js_function_forwarding_removed_holder_is(stack) {
  arguments_assert(arguments, 1);
  let holder = list_get_end_1(stack);
  let holder_is = list_is(holder);
  let r = {
    holder,
    holder_is,
  };
  return r;
}
