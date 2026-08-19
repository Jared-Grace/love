import { app_code_lesson_expression_choose_order_operators_expression_parts } from "./app_code_lesson_expression_choose_order_operators_expression_parts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_choose_order_expression_digits(
  left,
  middle,
  right,
  strong_right,
) {
  "three given digits and two operators built into the shape a press-the-operators lesson asks about: 1 + 2 * 3, or 1 * 2 + 3, with strong_right saying which side the multiplication lands on";
  "the digits are given here rather than drawn, because the same three digits are arrived at two ways: drawn fresh for a new question, and read back off a line that was printed earlier. Both want the same shape built the same way, and a builder that drew its own numbers could only serve the first";
  "The two operators are the only thing this settles that the shape next door does not, and it settles them the same way for every question this lesson asks: multiplication is the strong one and addition the weak one. Everything after that is the same nesting, so it is asked for rather than written out again.";
  arguments_assert(arguments, 4);
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let tree = app_code_lesson_expression_choose_order_operators_expression_parts(
    left,
    middle,
    right,
    plus,
    times,
    strong_right,
  );
  return tree;
}
