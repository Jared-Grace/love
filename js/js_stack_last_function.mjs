import { js_stack_last_multiple } from "../../../love/public/src/js_stack_last_multiple.mjs";
import { js_types_function } from "../../../love/public/src/js_types_function.mjs";
export function js_stack_last_function(stack) {
  let types = js_types_function();
  let f = js_stack_last_multiple(stack, types);
  return f;
}
