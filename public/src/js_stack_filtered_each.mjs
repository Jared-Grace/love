import {each} from './each.mjs';
import {js_stack_filtered} from './js_stack_filtered.mjs';
export function js_stack_filtered_each(stack, type, lambda) {
  let bss = js_stack_filtered(stack, type);
  each(bss, lambda);
}
