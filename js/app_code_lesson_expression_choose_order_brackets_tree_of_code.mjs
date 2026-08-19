import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_tree_of_code_generic } from "./app_code_lesson_expression_choose_order_tree_of_code_generic.mjs";
export function app_code_lesson_expression_choose_order_brackets_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: false && (true || true) gives back the shape whose || holds the last two, and (true || false) && true gives back the one whose || holds the first two");
  ("The hanging handed in is the one the brackets ask for, because that is what this lesson teaches. Reading the line back is the same work here as on the and-before-or lesson, so it is said once, next door.");
  ("Which of the two hangings it is, is read off the one mark that says it: a line that opens with a bracket is one whose || gathers the first two words, and every other line this lesson writes has its bracket further along. Nothing has to be remembered from the run that printed the line, which is the whole reason the line is read back rather than kept.");
  let left_bracket = js_code_parenthesis_left();
  let opens_bracketed = text_starts_with(code, left_bracket);
  if (opens_bracketed) {
    let tree_left =
      app_code_lesson_expression_choose_order_tree_of_code_generic(
        code,
        app_code_expression_node_left_operator_first,
      );
    return tree_left;
  }
  let tree = app_code_lesson_expression_choose_order_tree_of_code_generic(
    code,
    app_code_expression_node_right_operator_first,
  );
  return tree;
}
