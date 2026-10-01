import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
export function js_code_between_symbols(
  low,
  low_symbol,
  middle,
  high_symbol,
  high,
) {
  arguments_assert(arguments, 5);
  ("the code of a number checked between two others, as two comparisons joined with and: low <= middle && middle < high, with each comparison's symbol handed in. The middle is written twice, once in each comparison, as JavaScript needs it.");
  let left = js_code_binary_spaced_nb(low, low_symbol, middle);
  let right = js_code_binary_spaced_nb(middle, high_symbol, high);
  let and_symbol = js_operator_and_symbol();
  let both = js_code_binary_spaced_nb(left, and_symbol, right);
  return both;
}
