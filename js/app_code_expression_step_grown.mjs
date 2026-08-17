import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_rank } from "./app_code_expression_rank.mjs";
import { app_code_expression_step_choices } from "./app_code_expression_step_choices.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_expression_step_grown(item) {
  arguments_assert(arguments, 1);
  (
    "the same line with one more operator on it, drawn from the ways that print back as the line they mean: a 6 may come back as 6 / 3, or as 2 + 6, or as 9 - 6"
  );
  (
    "The line that is already there becomes one side of the new operator, so it is a part that has to be worked out before the new operator can go. That is what makes a line built this way have exactly ONE part ready at every moment however long it grows - the learner is never asked to choose between two right answers while they are still learning what makes an answer right."
  );
  (
    "What is already there is asked what it comes to, and the new number is chosen against that value rather than against the numbers written on the line. A line that has come to 6 takes the same partners whether it was 2 * 3 or 9 - 3, so the growing does not have to know what it is growing from."
  );
  let value = app_code_expression_value(item);
  let rank_most = app_code_expression_rank(item);
  let choices = app_code_expression_step_choices(value, rank_most);
  let choice = list_random_item(choices);
  let symbol = property_get(choice, "symbol");
  let value_left = property_get(choice, "value_left");
  let operands = property_get(choice, "operands");
  let other = list_random_item(operands);
  let left = ternary(value_left, item, other);
  let right = ternary(value_left, other, item);
  let grown = app_code_expression_node(left, symbol, right);
  return grown;
}
