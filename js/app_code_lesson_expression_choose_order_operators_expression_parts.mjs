import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_operators_expression_parts(
  left,
  middle,
  right,
  weak_symbol,
  strong_symbol,
  strong_right,
) {
  arguments_assert(arguments, 6);
  ("three given digits and two given operators built into the shape a press-the-operators lesson asks about: 8 - 2 * 3, or 8 / 2 + 3, with strong_right saying which side the stronger operator lands on");
  ("The digits and the operators are all given here rather than drawn, because the same line is arrived at two ways: drawn fresh for a new question, and read back off a line that was printed earlier. Both want the same shape built the same way, and a builder that drew its own would only serve the first.");
  ("The stronger operator is the one that ends up INSIDE, whichever side it landed on, and that is the whole of what this shape says. Which symbol is stronger is not decided here - the caller has already sorted its two operators into the weak one and the strong one, so this file can build the nesting without knowing anything about what the symbols mean.");
  if (strong_right) {
    let inner_right = app_code_expression_node(middle, strong_symbol, right);
    let tree_right = app_code_expression_node(left, weak_symbol, inner_right);
    return tree_right;
  }
  let inner_left = app_code_expression_node(left, strong_symbol, middle);
  let tree_left = app_code_expression_node(inner_left, weak_symbol, right);
  return tree_left;
}
