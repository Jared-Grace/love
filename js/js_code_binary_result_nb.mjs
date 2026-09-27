import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
export function js_code_binary_result_nb(left, operator, right, result) {
  arguments_assert(arguments, 4);
  ("one worked operation written as code with its answer, like 3 + 2 === 5, kept from breaking across lines");
  let worked = js_code_binary_spaced_nb(left, operator, right);
  let same = js_operator_triple_equal_symbol();
  let code = js_code_binary_spaced_nb(worked, same, result);
  return code;
}
