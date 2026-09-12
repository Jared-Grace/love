import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_double_asterisk_symbol } from "./js_operator_double_asterisk_symbol.mjs";
export function app_code_operators_right_first() {
  arguments_assert(arguments, 0);
  ("the operators javascript works out right side first, by their symbols: **");
  ("2 ** 3 ** 2 is 2 ** (3 ** 2), where 8 / 4 / 2 is (8 / 4) / 2. The side worked out LAST is the side that has to be gathered when it holds an operator of the same strength - for every other operator the app knows that is the right side, and for these it is the left. So the shape (2 ** 3) ** 2 has to print its parentheses, and without them the line reads as the other one.");
  ("A list of its own rather than the power class read a second time. The two questions have the same answer today and they are not the same question: an operator as strong as a power that was still worked out left to right would break whichever list was standing in for the other.");
  let symbol = js_operator_double_asterisk_symbol();
  let symbols = [symbol];
  return symbols;
}
