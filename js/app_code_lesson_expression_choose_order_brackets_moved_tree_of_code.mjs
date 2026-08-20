import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_left_operator_first_bracketed } from "./app_code_expression_node_left_operator_first_bracketed.mjs";
import { app_code_expression_node_right_operator_first_bracketed } from "./app_code_expression_node_right_operator_first_bracketed.mjs";
import { app_code_lesson_expression_choose_order_tree_of_code_bracket_side } from "./app_code_lesson_expression_choose_order_tree_of_code_bracket_side.mjs";
export function app_code_lesson_expression_choose_order_brackets_moved_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: (false && true) || true gives back the shape whose && holds the first two, and false && (true || true) the one whose || holds the last two");
  ("The two builders write their brackets back into the shape rather than leaving them to be worked out. On this lesson one of the two lines carries a pair that changes nothing, and a shape that had forgotten it was written would print that line without it - so a learner would press on one line and be shown another.");
  ("Reading the line back, and picking the hanging off the end the bracket opens at, are the same work here as on the lesson next door whose brackets always change something, so they are said once, there.");
  let tree = app_code_lesson_expression_choose_order_tree_of_code_bracket_side(
    code,
    app_code_expression_node_left_operator_first_bracketed,
    app_code_expression_node_right_operator_first_bracketed,
  );
  return tree;
}
