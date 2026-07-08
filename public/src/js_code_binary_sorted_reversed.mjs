import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
export function js_code_binary_sorted_reversed(left, operator, right) {
  let operands = [left, right];
  let combined = js_code_binary(left, operator, right);
  list_sort_text(list);
  return combined;
}
