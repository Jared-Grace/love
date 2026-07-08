import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
export function js_code_binary_sorted_reversed(left, operator, right) {
  let operands = [left, right];
  let combined = js_code_binary(left, operator, right);
  return combined;
}
