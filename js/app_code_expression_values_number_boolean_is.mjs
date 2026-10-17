import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { number_is } from "./number_is.mjs";
import { boolean_is } from "./boolean_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_node_before_is } from "./app_code_expression_node_before_is.mjs";
export function app_code_expression_values_number_boolean_is(item) {
  arguments_assert(arguments, 1);
  ("whether every value standing in an expression shape is a number or a true or false: 0 <= 2 && 2 < 4 is, and a string anywhere in it is not");
  ("The line a learner presses is written by ",
    fn_name("app_code_expression_paint"),
    ", which writes a value as text with no quotes, so a string in it would read as a name. Asked before a shape is handed to that line, so a line holding one can be solved some other way rather than shown wrongly.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let plain = number_is(item) || boolean_is(item);
    return plain;
  }
  let right = property_get(item, "right");
  let right_plain = app_code_expression_values_number_boolean_is(right);
  let before_is = app_code_expression_node_before_is(item);
  if (before_is) {
    return right_plain;
  }
  let left = property_get(item, "left");
  let left_plain = app_code_expression_values_number_boolean_is(left);
  let both = left_plain && right_plain;
  return both;
}
