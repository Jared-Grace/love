import { list_last_or_null } from "../../../love/public/src/list_last_or_null.mjs";
import { js_stack_filtered_multiple } from "../../../love/public/src/js_stack_filtered_multiple.mjs";
export function js_stack_last_multiple(stack, types) {
  let filtered = js_stack_filtered_multiple(stack, types);
  let last = list_last_or_null(filtered);
  return last;
}
