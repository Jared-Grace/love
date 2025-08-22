import { js_stack_filtered_multiple_each } from "./js_stack_filtered_multiple_each.mjs";
export function js_stack_filtered_each(stack, type, lambda) {
  js_stack_filtered_multiple_each(stack, [type], lambda);
}
