import { each } from "./each.mjs";
import { js_stack_filtered_multiple } from "./js_stack_filtered_multiple.mjs";
export function js_stack_filtered_multiple_each(stack, types, lambda$node) {
  let filtered = js_stack_filtered_multiple(stack, types);
  each(filtered, lambda$node);
}
