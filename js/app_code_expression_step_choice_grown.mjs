import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_expression_step_choice_grown(item, choice) {
  arguments_assert(arguments, 2);
  (
    "the line with one named way of growing it carried out: the line so far becomes one side of the new operator, and one of the numbers that choice allows becomes the other"
  );
  (
    "The choosing and the building are two different questions, and each caller answers the first one differently while every one of them answers the second the same way. Written into each of them, the building would be the same three lines with a different chance of putting the sides the wrong way round."
  );
  let symbol = property_get(choice, "symbol");
  let value_left = property_get(choice, "value_left");
  let operands = property_get(choice, "operands");
  let other = list_random_item(operands);
  let left = ternary(value_left, item, other);
  let right = ternary(value_left, other, item);
  let grown = app_code_expression_node(left, symbol, right);
  return grown;
}
