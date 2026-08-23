import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get } from "./property_get.mjs";
export function js_operator_symbol_verb(symbol) {
  arguments_assert(arguments, 1);
  ("the English word for doing an arithmetic operator, found from the symbol alone: / comes back as divide");
  ("A lesson with a line in front of it holds the symbol and nothing else, and the word is what a sentence about that line has to say - we divide two numbers reads as English where we / two numbers does not.");
  ("Looked up rather than listed again. The operators already carry their own word beside them, and a lesson keeping a second list of four would be a list that can disagree with the first one.");
  let operators = js_operators_arithmetic();
  let operator = list_find_property(operators, "operator", symbol);
  let verb = property_get(operator, "verb");
  return verb;
}
