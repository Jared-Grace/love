import { js_stack_last_multiple } from "./js_stack_last_multiple.mjs";
export function js_stack_last(stack, type) {
  let last = js_stack_last_multiple(stack, [type]);
  return last;
}
