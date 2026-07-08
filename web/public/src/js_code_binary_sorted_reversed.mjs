import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_second_only } from "../../../love/public/src/list_first_second_only.mjs";
import { list_sort_text as list_sort_text_reverse } from "../../../love/public/src/list_sort_text.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
export function js_code_binary_sorted_reversed(left, operator, right) {
  let operands = [left, right];
  list_sort_text_reverse(operands);
  let r = list_first_second_only(operands);
  let second = property_get(r, "second");
  let first = property_get(r, "first");
  let combined = js_code_binary(first, operator, second);
  return combined;
}
function list_sort_text_reverse(operands) {
    list_sort_text_reverse(operands);
    list_reverse(operands);
}

