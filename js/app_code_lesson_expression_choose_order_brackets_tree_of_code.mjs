import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_tree_of_code_bracket_side } from "./app_code_lesson_expression_choose_order_tree_of_code_bracket_side.mjs";
export function app_code_lesson_expression_choose_order_brackets_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: false && (true || true) gives back the shape whose || holds the last two, and (true || false) && true gives back the one whose || holds the first two");
  ("The hanging handed in is the one the brackets ask for, because that is what this lesson teaches. Reading the line back, and picking the hanging off the end the bracket opens at, are the same work on every lesson whose brackets move, so they are said once, next door.");
  ("The two builders write no brackets of their own, and none are needed: the || these lines gather is the weaker of the two operators, so a printer working the need out off the shape writes the pair back wherever it stands. The lesson whose brackets sometimes change nothing hands in the two that write them.");
  let tree = app_code_lesson_expression_choose_order_tree_of_code_bracket_side(
    code,
    app_code_expression_node_left_operator_first,
    app_code_expression_node_right_operator_first,
  );
  return tree;
}
