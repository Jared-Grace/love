import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_twin_read_generic } from "./app_code_lesson_expression_choose_order_twin_read_generic.mjs";
import { app_code_lesson_expression_arithmetic_less_than } from "./app_code_lesson_expression_arithmetic_less_than.mjs";
import { app_code_expression_flat_tree_of_code } from "./app_code_expression_flat_tree_of_code.mjs";
import { app_code_expression_value_decoys_mixed } from "./app_code_expression_value_decoys_mixed.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_less_than() {
  arguments_assert(arguments, 0);
  ("arithmetic on one side of a comparison, taken a press at a time before the lesson next door asks for the whole line: 3 + 2 < 8, choose the plus, choose 5, see 5 < 8, choose the less than, choose true");
  let words = ["Solve arithmetic comparisons"];
  let lesson = app_code_lesson_expression_choose_order_twin_read_generic(
    words,
    app_code_lesson_expression_arithmetic_less_than,
    app_code_expression_flat_tree_of_code,
    app_code_expression_value_decoys_mixed,
  );
  return lesson;
}
