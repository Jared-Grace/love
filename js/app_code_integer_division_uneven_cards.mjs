import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_division_worked_numbers } from "./app_code_division_worked_numbers.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_integer_division_uneven_cards(root) {
  arguments_assert(arguments, 1);
  ("the two cards that set integer division up before either lesson on it asks anything: that rounding down is already known, and that dividing does not always come out even");
  ("Two lessons open with these, and they are the same two cards on both. The screen where a learner presses the line apart comes first and the screen where they answer it whole comes second, and a learner arriving at the second one has read the first - so the second opens by putting back what the first opened by teaching, in the words it was taught in.");
  ("The division is built as a shape and written out from the shape, and its value is worked out rather than typed. Typed, the day the worked pair changed the sentence would have gone on saying a decimal that no longer belongs to the numbers beside it, and nothing would have complained.");
  let recall = app_code_container_light_blue(root);
  let floor_name = js_code_math_floor_name();
  html_div_cycle_code(recall, [
    "You know that ",
    floor_name,
    " rounds a number down",
  ]);
  let problem = app_code_container_light_blue(root);
  html_div_cycle_code(problem, ["Dividing does not always come out even"]);
  let numbers = app_code_division_worked_numbers();
  let dividend = property_get(numbers, "dividend");
  let divisor = property_get(numbers, "divisor");
  let divided_by = js_operator_division_symbol();
  let division = app_code_expression_node(dividend, divided_by, divisor);
  let division_code = app_code_expression_code(division);
  let value = app_code_expression_value(division);
  let value_text = text_to(value);
  html_div_cycle_code(problem, [
    "For example, ",
    division_code,
    " is ",
    value_text,
  ]);
}
