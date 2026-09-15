import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_twin_read_generic } from "./app_code_lesson_expression_choose_order_twin_read_generic.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
export function app_code_lesson_expression_choose_order_twin_generic(
  title_words,
  twin_get,
) {
  arguments_assert(arguments, 2);
  ("the pressing lesson in front of an all-at-once lesson whose lines carry numbers joined by operators and no parentheses, answered with numbers");
  let lesson = app_code_lesson_expression_choose_order_twin_read_generic(
    title_words,
    twin_get,
    app_code_expression_flat_tree_of_code,
    app_code_expression_value_decoys,
  );
  return lesson;
}
