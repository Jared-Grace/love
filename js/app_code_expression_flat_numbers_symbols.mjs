import { arguments_assert } from "./arguments_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { multiply } from "./multiply.mjs";
import { add_1 } from "./add_1.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { range_map } from "./range_map.mjs";
export function app_code_expression_flat_numbers_symbols(code) {
  arguments_assert(arguments, 1);
  ("a line of arithmetic carrying no parentheses pulled apart into the numbers standing on it and the operators standing between them: 2 + 9 / 3 - 4 gives back 2, 9, 3, 4 and +, /, -");
  ("Both readings of a line come from the one walk of it. A reader that took only the operators out would spell the every-other-word arithmetic a second time, and that arithmetic is the one place a reader of a line can be wrong while the line it read looks perfectly right.");
  ("It says nothing about which operator goes first. That is the whole point of it - the ways of folding a line differ from each other only in the order they take these same pieces in, so the pieces are read once and the order is left to whoever asked.");
  let numbers = text_integers(code);
  let pieces = text_split_space(code);
  function symbol_at(index) {
    "the operator standing after the number at this place, which is every other word of the line";
    let doubled = multiply(index, 2);
    let at = add_1(doubled);
    let symbol = list_get(pieces, at);
    return symbol;
  }
  let operator_count = list_size_subtract(numbers, 1);
  let symbols = range_map(operator_count, symbol_at);
  let parts = {
    numbers,
    symbols,
  };
  return parts;
}
