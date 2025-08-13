import { js_stack_filtered_multiple_each } from "./js_stack_filtered_multiple_each.mjs";
import { each } from "./each.mjs";
import { js_stack_filtered } from "./js_stack_filtered.mjs";
export function js_stack_filtered_each(stack, type, lambda) {
  js_stack_filtered_multiple_each(stack, [type], lambda);
}
