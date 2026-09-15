import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_twin_read_generic } from "./app_code_lesson_expression_choose_order_twin_read_generic.mjs";
import { app_code_lesson_expression_in_between } from "./app_code_lesson_expression_in_between.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_expression_value_decoys_boolean } from "./app_code_expression_value_decoys_boolean.mjs";
export function app_code_lesson_expression_choose_order_in_between() {
  arguments_assert(arguments, 0);
  ("two < joined by &&, taken a press at a time before the lesson next door asks for the whole line: 4 < 5 && 5 < 8, choose the left less than, choose true, choose the right less than, choose true, see true && true, choose true");
  ("Every part of such a line comes to true or false, so the wrong value offered on each press is the other of the two.");
  let words = ["Solve in between"];
  let lesson = app_code_lesson_expression_choose_order_twin_read_generic(
    words,
    app_code_lesson_expression_in_between,
    app_code_expression_flat_tree_of_code,
    app_code_expression_value_decoys_boolean,
  );
  return lesson;
}
