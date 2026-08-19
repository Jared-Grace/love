import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_tree_of_code_generic } from "./app_code_lesson_expression_choose_order_tree_of_code_generic.mjs";
export function app_code_lesson_expression_choose_order_brackets_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: false && (true || true) gives back the shape whose || holds the last two and whose && holds what that comes to");
  ("The hanging handed in is the one the brackets ask for, because that is what this lesson teaches. Reading the line back is the same work here as on the and-before-or lesson, so it is said once, next door.");
  let tree = app_code_lesson_expression_choose_order_tree_of_code_generic(
    code,
    app_code_expression_node_right_operator_first,
  );
  return tree;
}
