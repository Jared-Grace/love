import { app_code_arithmetic_to_value_parts_symbol } from "./app_code_arithmetic_to_value_parts_symbol.mjs";
import { app_code_arithmetic_to_value_symbols } from "./app_code_arithmetic_to_value_symbols.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_arithmetic_to_value_parts(value) {
  "a random small arithmetic expression that comes to the value asked for, given as its three pieces: the number on the left, the operator, and the number on the right";
  "The operator is drawn fresh every time, because the point of asking twice for the same value is two sides that look different and come to the same number - 3 + 4 === 5 + 2. Two sides drawn with one operator would look like the same working out twice.";
  "Which is why the drawing and the writing are two functions rather than one. The lesson whose run counts the operators on its line out loud needs both sides written with the SAME one, and it asks the writer directly with an operator of its own choosing.";
  let symbols = app_code_arithmetic_to_value_symbols();
  let symbol = list_random_item(symbols);
  let built = app_code_arithmetic_to_value_parts_symbol(value, symbol);
  return built;
}
